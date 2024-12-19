import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-primary backdrop-blur-sm shadow-lg flex justify-center items-center py-3 font-normal text-sm">
            © {currentYear} AUSTRIO-TECH. All rights reserved.
        </div>
    );
};

export default Footer;
