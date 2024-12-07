import React from "react";
import {FormError} from "./FormError";


interface GeneralInputFieldProps {
    inputType: string
    register: any
    name: string
    label: string
    error?: string
    defaultValue ?: string
}

export const GeneralInputField:React.FC<GeneralInputFieldProps> = ({register,name,label,error,defaultValue,inputType="text"}) => {
    return (
        <>
            <div className="sm:col-span-3">
                <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">
                    {label}
                </label>
                <div className="mt-2">

                    <input
                        defaultValue={defaultValue}
                        {...register(name)}
                        id={name}
                        type={inputType}
                        className={`${error ? 'input-error':'input-valid'} input`}
                    />

                    {error && <FormError error={error} />}
                </div>
            </div>
        </>
    )
}