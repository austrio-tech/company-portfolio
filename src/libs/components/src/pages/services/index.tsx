import React from "react";

import ServiceBox from "./molecules/ServiceBox";

import { SERVICES } from "../../../../db";

import { Text } from "../../ui";

const ServicesPage: React.FC = () => {
    return (
        <div className="space-y-6">
            <Text
                fontSize="text-4xl"
                fontWeight="font-bold"
                className="text-center"
            >
                Services We Provides
            </Text>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 h-auto">
                {SERVICES.map((row, index) => (
                    <div key={index}>
                        <ServiceBox row={row} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesPage;
