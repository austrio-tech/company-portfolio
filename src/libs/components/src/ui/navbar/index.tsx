import React from "react";
import { NAVBARLINKS } from "../../../../db/index";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="w-full h-20 bg-gradient-to-r from-dark via-white to-dark bg-dark flex justify-between items-center px-10">
            <div>
                <h2 className="text-2xl font-medium py-3 text-white">
                    AUSTRIO-TECH
                </h2>
            </div>
            <div className="flex items-center space-x-4 text-lg font-medium">
                {NAVBARLINKS.map((row, index) => (
                    <div key={index} className="text-white hover:text-primary">
                        <Link href={row.link}>{row.name}</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
