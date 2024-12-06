import React from "react";

interface PreferenceWrapperProps {
    title: string
    subTitle: string
    data :any
    name :string
    register: any
}
export const PreferenceWrapper: React.FC<PreferenceWrapperProps> = ({title,subTitle,data,name,register}) => {
    return (
        <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900">{title}</legend>
            <p className="mt-1 text-sm/6 text-gray-600">{subTitle}</p>
            <div className="mt-6 space-y-6">
                {
                   data && data.map((item:any,i=0) => (
                        <div key={i} className="flex items-center gap-x-3">
                            <input
                                id={name}
                                {...register(`${name}[]`)}
                                type="checkbox"
                                value={item.id}
                                className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            />
                            <label htmlFor="push-everything"
                                   className="block text-sm/6 font-medium text-gray-900">
                                {item.name}
                            </label>
                        </div>
                    ))
                }
            </div>
        </fieldset>
    )
}