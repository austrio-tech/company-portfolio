import React from "react";

const ScreenLoader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative w-20 h-20">
                <svg
                    className="m-auto"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="80px"
                    height="80px"
                    viewBox="0 0 24 30"
                    xmlSpace="preserve"
                >
                    <rect
                        x="0"
                        y="40"
                        width="4"
                        height="40"
                        fill="#fff"
                        opacity="0.2"
                    >
                        <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x="8"
                        y="40"
                        width="4"
                        height="40"
                        fill="#fff"
                        opacity="0.2"
                    >
                        <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.15s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x="16"
                        y="40"
                        width="4"
                        height="40"
                        fill="#fff"
                        opacity="0.2"
                    >
                        <animate
                            attributeName="opacity"
                            attributeType="XML"
                            values="0.2; 1; .2"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            values="10; 20; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="y"
                            attributeType="XML"
                            values="10; 5; 10"
                            begin="0.3s"
                            dur="0.6s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </svg>
            </div>
        </div>
    );
};

export default ScreenLoader;
