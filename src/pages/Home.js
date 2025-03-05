import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/Home.css";
import paletteImage from "../assets/palette.png";  // Import the new banner image
import leftImage from "../assets/left.jpg";  // Keep the left image
import rightImage from "../assets/right.jpg";  // Keep the right image

const Home = () => {
    return (
        <>
            <main className="home-container">
                <div className="home-content">
                    {/* Left Image */}
                    <div className="left-image-container">
                        <img src={leftImage} alt="Left side image" className="left-image" />
                    </div>

                    {/* Text Section */}
                    <div className="text-section">
                        <h1>Welcome to Horti-Couture!</h1>
                        <p>
                            Transform your space with our bespoke planters, plant consultation, installation, 
                            and ongoing maintenance services. Let us help you create a healthy, green environment!
                        </p>
                        <p>Contact us today to bring nature into your home or office.</p>

                        {/* Button linking to the contact page */}
                        <Link to="/contact" className="contact-button">
                            Contact Us For A Quote
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="right-image-container">
                        <img src={rightImage} alt="Right side image" className="right-image" />
                    </div>
                </div>

                {/* Palette Banner Image below the text and images */}
                <img src={paletteImage} alt="Palette Banner" className="home-banner" />
            </main>
            <Footer />
        </>
    );
};

export default Home;
