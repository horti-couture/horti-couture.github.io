import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../components/Footer";
import "../styles/Services.css";
import cleanerImage from "../assets/cleaner.jpg"; // Import image (you can update this if necessary)

const Services = () => {
    const navigate = useNavigate(); // Initialize navigation

    return (
        <>
            <main className="services-container">
                <h1>Our Services</h1>

                <div className="services-content">
                    {/* Text Section */}
                    <div className="services-text">
                        <h2>Planter Consultation and Design</h2>
                        <p>
                            We offer our own range of planters, as well as bespoke custom designs tailored to your space. 
                            Our experts provide consultation and design advice on choosing the best planters and plants 
                            suited to the light and environmental conditions of your space.
                        </p>
                        <p>
                            We aim to help you achieve scientifically proven results for improved air quality, creating 
                            a healthier environment through the careful selection and placement of plants.
                        </p>

                        <h2>Installation</h2>
                        <p>
                            Once the design aspects are finalized, our expert installation team will bring your vision to life. 
                            We’ll confirm a date for installation and take care of all the details for you.
                        </p>

                        <h2>Maintenance Options</h2>
                        <p>
                            We offer ongoing plant maintenance services to ensure that your plants stay healthy and thriving. 
                            Our maintenance services include:
                        </p>
                        <ul>
                            <li>✔ Ensuring optimum levels of watering</li>
                            <li>✔ Monitoring and providing for the plants' nutritional needs</li>
                            <li>✔ Insect and fungus control</li>
                            <li>✔ Pruning, trimming, and cleaning foliage</li>
                            <li>✔ Re-potting and topping up of soil when needed</li>
                        </ul>

                        {/* Contact Button */}
                        <button className="contact-button" onClick={() => navigate("/contact")}>
                            Contact Us For A Quote
                        </button>
                    </div>

                    {/* Image Section */}
                    <div className="services-image">
                        <img src={cleanerImage} alt="Planters and plants" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Services;
