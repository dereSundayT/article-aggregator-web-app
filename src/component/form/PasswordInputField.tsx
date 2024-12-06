import React, { useState } from "react";
import {Link} from "react-router-dom";
import {FormError} from "./FormError";

interface PasswordInputFieldProps {
    showForgotPassword: boolean;
    label: string;
    name: string;
    register: any;
    error?: string;
    passwordWatch?: string;
}

export const PasswordInputField:React.FC<PasswordInputFieldProps> = ({showForgotPassword,label,register,name,error,passwordWatch}) => {
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">{label}</label>
                {
                    showForgotPassword &&
                    <div className="text-sm">
                        <Link to="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</Link>
                    </div>
                }
            </div>

            <div className={`mt-2 relative ${error && 'input-error'}`}>
                <input
                    id={name}
                    type={showPassword ? "text" : "password"}
                    {...register(name,{
                        required: {
                            value: true,
                            message: `${label} is required`
                        },
                        minLength: {
                            value: 8,
                            message: `${label} must be at least 8 characters`
                        },
                        validate: name === "password_confirmation" ? (value:any) => value === passwordWatch || "Passwords do not match" : undefined

                    })}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />

                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                    {showPassword ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px"
                             height="24px">
                            <path
                                d="M12 4.5c-1.74 0-3.41.45-4.88 1.24l1.42 1.42C9.9 6.6 10.94 6.3 12 6.3c3.31 0 6.15 2.01 7.5 5.7-.39 1.05-.95 2.01-1.64 2.82l1.42 1.42C20.865 14.39 22.5 12 22.5 12c-1.635-4.39-5.805-7.5-10.5-7.5zm-9.19.69L2.1 6.9l1.42 1.42C2.865 9.61 1.5 12 1.5 12c1.635 4.39 5.805 7.5 10.5 7.5 1.74 0 3.41-.45 4.88-1.24l1.42 1.42 1.41-1.41L3.22 4.19 2.81 4.5zM12 17.7c-3.31 0-6.15-2.01-7.5-5.7.39-1.05.95-2.01 1.64-2.82l1.42 1.42C7.1 11.4 6.06 11.7 5 11.7c0 1.66 1.34 3 3 3 .94 0 1.78-.41 2.34-1.06l1.42 1.42C11.1 15.9 10.06 16.2 9 16.2c0 1.66 1.34 3 3 3 .94 0 1.78-.41 2.34-1.06l1.42 1.42C15.9 17.1 14.94 17.7 12 17.7z"/>
                        </svg>

                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px"
                             height="24px">
                            <path
                                d="M12 4.5C7.305 4.5 3.135 7.61 1.5 12c1.635 4.39 5.805 7.5 10.5 7.5s8.865-3.11 10.5-7.5C20.865 7.61 16.695 4.5 12 4.5zm0 12c-2.485 0-4.5-2.015-4.5-4.5S9.515 7.5 12 7.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5zm0-7.5c-1.655 0-3 1.345-3 3s1.345 3 3 3 3-1.345 3-3-1.345-3-3-3z"/>
                        </svg>
                    }
                </button>
            </div>
            {error && <FormError error={error}/>}
        </div>
    );
};