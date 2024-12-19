import React from "react";

interface HamburgerStyles {
    isOpen: boolean;
    setIsOpen: () => void;
}

const Hamburger: React.FC<HamburgerStyles> = ({ setIsOpen, isOpen }) => {
    return (
        <div
            className="flex flex-col items-end cursor-pointer opacity-75 hover:opacity-95"
            onClick={setIsOpen}
        >
            <div
                className={`w-10 h-[6px] rounded-md bg-white mb-1 transition-all duration-300 ${
                    isOpen ? "transform" : ""
                }`}
            ></div>
            <div
                className={`w-10 h-[6px] rounded-md bg-white mb-1 transition-all duration-300 ${
                    isOpen ? "w-[30px]" : ""
                }`}
            ></div>
            <div
                className={`w-10 h-[6px] rounded-md bg-white mb-1 transition-all duration-300 ${
                    isOpen ? "transform w-5" : ""
                }`}
            ></div>
        </div>
    );
};

export default Hamburger;
