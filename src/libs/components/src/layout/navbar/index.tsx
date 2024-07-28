"use client";

import React, { useState } from "react";

import Link from "next/link";

import Hamburger from "./molecules/Hamburger";
import { ImageComponent } from "../../ui";

import { MOBILENAVBARLINKS, WEBNAVBARLINKS } from "../../../../db/index";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handelToggle = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClose = () => {
        setTimeout(() => {
            setIsOpen(false);
        }, 1000);
    };

    return (
        <div className="bg-primary backdrop-blur-sm shadow-lg">
            <div className="relative w-full h-[60px] md:h-20 flex justify-between items-center px-6 md:px-20">
                {/* Logo */}
                <Link href="/">
                    <h2 className="text-2xl font-medium py-3 text-white">
                        AUSTRIO-TECH
                    </h2>
                    {/* <ImageComponent alt="logo" src="/" priority /> */}
                </Link>

                {/* Web navbar */}
                <div className="hidden md:flex items-center space-x-10">
                    {WEBNAVBARLINKS.map((row, index) => (
                        <div
                            key={index}
                            className="relative text-white text-xl font-medium transition-all duration-300 hover:scale-125"
                        >
                            <Link href={row.link}>{row.name}</Link>
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white origin-center transition-transform duration-300 scale-x-0 hover:scale-x-100"></div>
                        </div>
                    ))}
                </div>

                {/* Mobile hamburger */}
                <div className="block md:hidden">
                    <Hamburger isOpen={isOpen} setIsOpen={handelToggle} />
                </div>

                {/* Mobile navbar */}
                <div
                    className={`${
                        isOpen ? "left-0" : "left-full"
                    } w-full transition-all duration-500 absolute md:hidden top-[64px] py-10 h-[95vh] flex flex-col items-center space-y-5 bg-primary backdrop-blur-sm`}
                >
                    {MOBILENAVBARLINKS.map((row, index) => (
                        <div
                            key={index}
                            className="flex justify-center text-white text-2xl font-medium hover:scale-125 transition-all duration-300 w-full"
                            onClick={handleClose}
                        >
                            <Link href={row.link}>{row.name}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
