import React from "react";

import Text from "../text";

interface InputTypes {
    type: string;
    name?: string;
    error?: string;
    focus?: boolean;
    readOnly?: boolean;
    handleChange?: any;
    className?: string;
    required?: boolean;
    placeholder?: string;
    value?: string | number | undefined | readonly string[];
}

const InputComponent: React.FC<InputTypes> = ({
    name,
    type,
    value,
    error,
    focus,
    required,
    readOnly,
    className,
    placeholder,
    handleChange,
}) => {
    return (
        <div className="flex flex-col w-full space-y-2">
            <input
                type={type}
                name={name}
                value={value}
                autoFocus={focus}
                required={required}
                readOnly={readOnly}
                onChange={handleChange}
                placeholder={placeholder}
                className={`px-3 py-2 rounded-md border outline-none bg-transparent text-base font-medium min-w-[200px] w-full ${
                    readOnly ? "text-gray-500" : "text-black"
                } ${className}`}
            />
            {error !== "" ? (
                <Text className="text-rose-600">{error}</Text>
            ) : null}
        </div>
    );
};

export default InputComponent;
