import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Horti Couture. All Rights Reserved.</p>
            <p>
                Contact: <a href="tel:072 356 7903" className="footer-link">072 356 7903</a> |  
                Email: <a href="mailto:horticouture@eastcoastsa.net" className="footer-link">horticouture@eastcoastsa.net</a>
            </p>
        </footer>
    );
};

export default Footer;
