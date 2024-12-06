import React from "react";

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
                                minLength: { value: minLength, message: `${label} is too Short` }
                            }
                        )}
                        id={name}
                        type={inputType}
                        className={`${error?' border border-red-500':'focus:outline-indigo-600'} block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2  sm:text-sm/6
                        `}
                    />

                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
            </div>
        </>
    )
}