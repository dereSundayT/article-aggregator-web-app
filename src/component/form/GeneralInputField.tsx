import React from "react";
import {FormError} from "./FormError";

interface GeneralInputFieldProps {
    inputType: string
    register: any
    isRequired: boolean
    name: string
    label: string
    error?: string
    minLength?: number
    defaultValue ?: string
}

export const GeneralInputField:React.FC<GeneralInputFieldProps> = ({register,isRequired,name,label,error,defaultValue,minLength=5,inputType="text"}) => {
    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    {label}
                </label>
                <div className="mt-2">
                    <input
                        defaultValue={defaultValue}
                        {...register(name,
                            {
                                required: {
                                    value: isRequired,
                                    message: `${label} is required`
                                },
                                minLength: { value: minLength, message: `${label} is too Short` },
                            }
                        )}
                        id={name}
                        type={inputType}
                        className={`${error ? 'input-error':'outline outline-1 -outline-offset-1 focus:outline-indigo-600 outline-gray-300'} input`}
                    />

                    {error && <FormError error={error} />}
                </div>
            </div>
        </>
    )
}