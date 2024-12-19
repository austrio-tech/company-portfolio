import React from "react";
import { Text } from "../../ui";
import { PROJECTS } from "../../../../db";
import ProjectBox from "./molecules/ProjectBox";

const ProjectsPage = () => {
    return (
        <div className="space-y-6">
            <Text
                fontSize="text-4xl"
                fontWeight="font-bold"
                className="text-center"
            >
                Our Projects
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 h-auto">
                {PROJECTS.map((row, index) => (
                    <div key={index}>
                        <ProjectBox row={row} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectsPage;
