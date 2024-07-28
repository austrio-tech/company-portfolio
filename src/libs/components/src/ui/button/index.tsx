import React, { ReactNode } from "react";
import { ButtonLoader } from "../loading";

interface ButtonTypes {
    rounded?: boolean;
    disabled?: boolean;
    className?: string;
    isLoading?: boolean;
    onPress?: () => void;
    children?: ReactNode;
    size?: "small" | "medium" | "large";
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonTypes> = ({
    type,
    onPress,
    rounded,
    disabled,
    children,
    isLoading,
    className,
    size,
}) => {
    return (
        <button
            type={type}
            disabled={disabled || isLoading}
            onClick={onPress}
            className={`bg-transparent border border-primary text-primary
            ${disabled ? "opacity-40 pointer-events-none" : ""}
            ${
                rounded
                    ? "p-2 rounded-full"
                    : size === "small"
                    ? "px-3 py-1 rounded-md font-light text-sm"
                    : size === "medium"
                    ? "px-5 py-2 rounded-md font-normal text-base"
                    : size === "large"
                    ? "px-7 py-2 rounded-lg font-medium text-lg"
                    : "px-4 py-2 rounded-md"
            }
            ${className} hover:bg-primary transition-all duration-300 hover:text-white`}
        >
            {isLoading === true ? <ButtonLoader sizes={size} /> : children}
        </button>
    );
};

export default Button;
