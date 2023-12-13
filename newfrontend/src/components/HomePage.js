import React from 'react';
import { Link } from "react-router-dom";
import leftSideImage from './Left-Side-p-800.png'
import rightSideImage from './Right-Side.png'

export default function HomePage() {
    return (
        <div className="relative min-h-screen bg-light flex flex-col items-center justify-center font-sans">
            <div className="absolute inset-0" style={{
                backgroundImage: `url(${leftSideImage}), url(${rightSideImage})`,
                backgroundPosition: 'left bottom, right bottom',
                backgroundRepeat: 'no-repeat, no-repeat',
                backgroundSize: 'cover no-repeat',
            }}>
                {/* Background images are set here */}
            </div>
            
            {/* Navigation Bar */}
            <nav className="absolute top-0 left-0 right-0 flex justify-between items-center p-6">
                <Link to="/" className="text-4xl font-bold text-gray-800">
                    VisuMagic
                </Link>
                <div className="space-x-4">
                    <Link to="/login" className="text-lg text-gray-800 hover:text-gray-600">Login</Link>
                    <Link to="/register" className="bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-6 py-2 rounded-full font-medium transition-all duration-300">
                        Sign up for free
                    </Link>
                </div>
            </nav>
            
            {/* Hero Section */}
            <div className="z-10 flex-grow container mx-auto flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 mt-24">
    <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        Unveil the Magic of Visualization<br />with VisuMagic.
    </h1>
    <p className="text-xl text-gray-600 mb-6">
        Crafted by AI. Unleashed by imagination.<br />
        Start the journey. Create stunning visuals without the complexity.
    </p>
    <Link to="/prompt" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
        Experience Now
    </Link>
  </div>
        </div>
    );
}
