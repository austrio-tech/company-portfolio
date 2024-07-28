import React from "react";
import { Button, Text } from "../../../ui";

type Service = {
    icon: string;
    heading: string;
    description: string;
};

interface ServicesTypes {
    row: Service;
}

const ServiceBox: React.FC<ServicesTypes> = ({ row }) => {
    const { icon, heading, description } = row;

    return (
        <div className="group h-[300px] [perspective:1000px] cursor-pointer">
            <div className="relative h-full w-full shadow-xl rounded-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]">
                {/* // front side // */}
                <div className="absolute inset-0 p-8 bg-opacity-10">
                    <div className="flex flex-col justify-center items-center space-y-4 h-full">
                        {/* // add icon here */}
                        <Text fontSize="text-xl" fontWeight="font-bold">
                            {heading}
                        </Text>
                    </div>
                </div>

                {/* // back side // */}
                <div className="absolute inset-0 h-full w-full shadow-xl rounded-xl p-8 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <div className="flex flex-col justify-between h-full">
                        <div className="space-y-4">
                            <Text
                                fontSize="text-lg"
                                fontWeight="font-base"
                                className="leading-5"
                            >
                                {heading}
                            </Text>
                            <Text
                                fontSize="text-sm"
                                fontWeight="font-base"
                                className="leading-5"
                            >
                                {description}
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBox;
