import React from "react";

import ServiceBox from "./molecules/ServiceBox";

import { SERVICES } from "../../../../db";

const ServicesPage: React.FC = () => {
    return (
        <div>
            ServicesPage
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
