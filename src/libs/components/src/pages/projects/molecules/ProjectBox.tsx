"use client";

import React, { useState } from "react";
import { Text } from "../../../ui";

type Project = {
    images: Array<string>;
    name: string;
    link: string;
    detail: string;
    color: string;
};

interface ProjectBoxTypes {
    row: Project;
}

const ProjectBox: React.FC<ProjectBoxTypes> = ({ row }) => {
    const [isHover, setIsHover] = useState(false);

    const { images, link, name, detail, color } = row;

    // make swipable slider in which at a time only one project is displayed
    // on click of show all prjects take it to the nect screen with all projects

    return (
        <div
            className={`w-full h-72 rounded-md transition-all duration-300 cursor-pointer shadow-2xl bg-[${color}] ${
                isHover ? "bg-opacity-75" : "bg-opacity-100"
            } `}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="p-10">
                <Text fontSize="text-xl" fontWeight="font-bold">
                    {name}
                </Text>
                <Text
                    fontSize="text-lg"
                    fontWeight="font-base"
                    className="leading-5"
                >
                    {detail}
                </Text>
            </div>
        </div>
    );
};

export default ProjectBox;
