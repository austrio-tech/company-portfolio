import React from "react";

interface ButtonLoaderProps {
    sizes?: "small" | "medium" | "large";
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ sizes = "medium" }) => {
    return (
        <button className="flex items-center justify-center text-black dark:text-white rounded px-4 h-9 min-w-24 relative opacity-50 cursor-not-allowed">
            <span className="flex items-center justify-center space-x-2">
                <b
                    className={`inline-block rounded-full animate-stretch ${
                        sizes === "small"
                            ? "h-3 w-3"
                            : sizes === "medium"
                            ? "h-4 w-4"
                            : "h-6 w-6"
                    }`}
                    style={{ animationDelay: "0s" }}
                ></b>
                <b
                    className={`inline-block rounded-full animate-stretch ${
                        sizes === "small"
                            ? "h-3 w-3"
                            : sizes === "medium"
                            ? "h-4 w-4"
                            : "h-6 w-6"
                    }`}
                    style={{ animationDelay: "0.1s" }}
                ></b>
                <b
                    className={`inline-block rounded-full animate-stretch ${
                        sizes === "small"
                            ? "h-3 w-3"
                            : sizes === "medium"
                            ? "h-4 w-4"
                            : "h-6 w-6"
                    }`}
                    style={{ animationDelay: "0.2s" }}
                ></b>
            </span>
        </button>
    );
};

export default ButtonLoader;
