import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function VisuMagic() {
  const [darkMode, setDarkMode] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const searchImages = async () => {
    try {
      toast.info("Processing your prompt...", { autoClose: 2000 });
      const response = await fetch("http://127.0.0.1:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: promptText }),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the images are in the 'public/flick30k/flickr30k_images' directory
        setImageUrls(
          data.images.map(
            (imageName) => `/flick30k/flickr30k_images/${imageName}`
          )
        );
      } else {
        console.error("Server error:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
      <div className="w-full p-4 shadow-md">
        <div className="flex justify-between items-center">
          <h1
            className={`text-xl font-bold  ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            VisuMagic
          </h1>
          <button
            onClick={toggleDarkMode}
            className={`transform transition-colors ${
              darkMode ? "bg-gray-300" : "bg-gray-600"
            } p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
          >
            <svg
              className={`w-6 h-6 text-gray-800 dark:text-gray-100 transform ${
                darkMode ? "rotate-180" : "rotate-0"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 3v2m4.22 1.64l1.42 1.42M21 12h-2m2.35 4.06l-1.42 1.42M17 19.06l-1.64 1.64M12 21v2m-4.24-2.64l-1.42-1.42M3 12h2m-2.35-4.06l1.42-1.42M7 4.94l1.64-1.64"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="inset-0  bg-opacity-75 flex justify-center items-center p-4">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl max-w-lg w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-100">
            Enter your prompt
          </h2>
          <input
            type="text"
            placeholder="e.g., A futuristic cityscape"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            className="w-full p-3 mb-4 rounded border-none shadow-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out transform focus:scale-105 dark:bg-gray-700 dark:text-gray-100"
          />
          <button
            onClick={searchImages}
            className="w-full py-3 mb-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg transition duration-200 ease-in-out transform hover:scale-105"
          >
            Generate
          </button>
          <div id="image-results">
            {imageUrls.length === 0 ? (
              <p>No images found.</p>
            ) : (
              imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl} // The URL is now simply the path within the public directory
                  alt={`Search result ${index}`}
                  style={{ maxWidth: "300px", marginRight: "10px" }}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
