import React from "react";
interface EmailInputFieldProps {
    register: any
    isRequired: boolean
    name: string
    label: string
    error?: string
}

export const EmailInputField:React.FC<EmailInputFieldProps>= ({register,isRequired,name,label,error}) => {
    return (
        <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">{label}</label>
            <div className="mt-2">
                <input
                    id={name}
                    {...register(name,
                        {
                            required: isRequired
                        }
                    )}
                    type="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600  border border-red-500  sm:text-sm/6"
                />
                {error && <p role="alert">{error}</p>}
            </div>
        </div>
    )
}