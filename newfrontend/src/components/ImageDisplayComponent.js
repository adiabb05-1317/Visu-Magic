import React from 'react';

const ImageDisplayComponent = ({ images }) => {
    return (
        <div>
            {images.map((img, idx) => (
                <img key={idx} src={img} alt="Visual representation" />
            ))}
        </div>
    );
}

export default ImageDisplayComponent;
