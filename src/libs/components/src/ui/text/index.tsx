import React, { ReactNode } from "react";

interface TextTypes {
    onClick?: any;
    fontSize?: string;
    className?: string;
    fontWeight?: string;
    children: ReactNode;
}

const Text: React.FC<TextTypes> = ({
    onClick,
    children,
    fontSize,
    className,
    fontWeight,
}) => {
    return (
        <div
            className={`select-none ${fontSize ? fontSize : "text-base"} ${
                fontWeight ? fontWeight : "font-medium"
            } ${className && className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
};
export default Text;
