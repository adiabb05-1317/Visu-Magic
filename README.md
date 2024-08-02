
# Visu-Magic

[GitHub Repository](https://github.com/adiabb05-1317/Visu-Magic)

## Overview


**Visu-Magic** is a comprehensive application designed to facilitate text-to-image search and grouping using advanced machine learning models. The project integrates state-of-the-art technologies like Contrastive Language-Image Pretraining (CLIP) and Vector Index FAISS for efficient and accurate image retrieval. The application comes with a user-friendly interface built with React.js, and its backend is powered by Flask.

![Screenshot 2024-08-02 at 7 19 36 PM](https://github.com/user-attachments/assets/8372e6a9-441a-49d4-8f26-a165c89406bb)

![Screenshot 2024-08-02 at 7 20 37 PM](https://github.com/user-attachments/assets/5661aa5f-14ab-41c3-b9d5-db7142b0a749)


## Features

- **Text-to-Image Search**: Translate textual descriptions into visual content.
- **Image Grouping**: Group similar images based on textual queries.
- **Efficient Retrieval**: Integrate CLIP and Vector Index FAISS for precise and efficient image matching.
- **User-Friendly Interface**: Intuitive search and grouping interface built with React.js.

## Technologies

- **Backend**: Python, Flask
- **Frontend**: React.js
- **Machine Learning**: CLIP (Contrastive Language-Image Pretraining), FAISS (Facebook AI Similarity Search)
- **Additional Libraries**: Tailwind CSS for styling

## Installation

### Prerequisites

- Python 3.6 or higher
- Node.js and npm
- Git

### Step-by-Step Guide

1. **Clone the repository**

    ```bash
    git clone https://github.com/adiabb05-1317/Visu-Magic.git
    cd Visu-Magic
    ```

2. **Set up the backend**

    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. **Set up the FAISS index**

    #### Windows
    - Install Microsoft Visual C++ Build Tools: [Download](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
    - Install FAISS: `pip install faiss-cpu`

    #### macOS
    - Install Xcode Command Line Tools: `xcode-select --install`
    - Install FAISS: `pip install faiss-cpu`

4. **Set up the frontend**

    ```bash
    cd ../newfrontend
    npm install
    npm run build
    ```

5. **Run the backend server**

    ```bash
    cd ../backend
    flask run
    ```

6. **Open the application**

    - Go to `http://localhost:5000` in your web browser.

## Usage

### Text-to-Image Search

1. **Enter text description**: Type your search query in the input field.
2. **Submit**: Press the search button to get relevant images.
3. **View Results**: The fetched images will be displayed on the webpage.

### Image Grouping

1. **Enter grouping criteria**: Input the text that describes how images should be grouped.
2. **Submit**: Press the grouping button to see similar images grouped together.
3. **View Groups**: The grouped images will be displayed based on the criteria.

## Project Structure

```plaintext
Visu-Magic/
├── backend/
│   └── ... (Python backend files)
├── newfrontend/
│   └── ... (React.js frontend files)
├── .DS_Store
├── README.md
├── tailwind.config.js
└── ...
```

## Contributing

Contributions are welcome! Please read the [contributing guide](CONTRIBUTING.md) for more details on the process of making contributions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgements

- The development team behind CLIP and FAISS for their groundbreaking work in AI and machine learning.
- The open-source community for continuous support and contribution.

Feel free to reach out to the maintainers for any questions or support.

---

This updated README includes instructions for setting up the FAISS index on both Windows and macOS environments. The steps ensure that the necessary dependencies are installed for the FAISS library to function correctly on different operating systems. 
