from flask import Flask, request, jsonify, send_from_directory
import numpy as np
import torch
import faiss
import pickle
from transformers import CLIPProcessor, CLIPModel
from typing import List
import os
from datasets import Dataset
from torch.utils.data import DataLoader
from flask_cors import CORS

app = Flask(__name__, static_folder='static')
CORS(app)
# Load the CLIP model and processor
device = "cpu"
model = CLIPModel.from_pretrained("openai/clip-vit-base-patch32")
preprocess = CLIPProcessor.from_pretrained("openai/clip-vit-base-patch32")

# Load the image embeddings and file paths
with open('flicker30k_image_embeddings.pkl', 'rb') as f:
    image_embeddings = pickle.load(f)

# Create a Faiss index for image embeddings
index = faiss.IndexFlatIP(image_embeddings.shape[1])
index.add(image_embeddings)

# Directory where your images are located
image_directory = '../newfrontend/public/flick30k/flickr30k_images/'


# List and filter all .jpg files in the directory
image_paths = [file for file in os.listdir(image_directory) if file.endswith('.jpg')]
image_paths.sort()

# Encode text function
# ... [encode_text function remains the same] ...
def encode_text(text: List[str], batch_size: int):
    dataset = Dataset.from_dict({'text': text})
    dataset = dataset.map(lambda el: preprocess(text=el['text'], return_tensors="pt",
                                                max_length=77, padding="max_length", truncation=True),
                          batched=True,
                          remove_columns=['text'])
    dataset.set_format('torch')
    dataloader = DataLoader(dataset, batch_size=batch_size)
    text_embeddings = []
    with torch.no_grad():
        for batch in dataloader:
            batch = {k: v.to(device) for k, v in batch.items()}
            text_embeddings.extend(model.get_text_features(**batch).detach().cpu().numpy())
    return np.vstack(text_embeddings)
# Text to image search function
# ... [text_to_image_search function remains the same] ...
def text_to_image_search(text_prompt, k=5):
    text_search_embedding = encode_text([text_prompt], batch_size=32)
    text_search_embedding /= np.linalg.norm(text_search_embedding, ord=2, axis=-1, keepdims=True)
    distances, indices = index.search(text_search_embedding.reshape(1, -1), k)
    return [image_paths[idx] for idx in indices[0]]



@app.route('/search', methods=['POST'])
def search():
    try:
        data = request.json
        text_prompt = data['text']
        retrieved_image_filenames = text_to_image_search(text_prompt)

        # Return image filenames only, not paths
        return jsonify({'images': retrieved_image_filenames})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
