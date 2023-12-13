import React, { useState } from "react";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a prompt..."
      />
      <button onClick={searchImages}>Search</button>
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
  );
};

export default SearchComponent;
