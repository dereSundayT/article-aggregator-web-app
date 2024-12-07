import React from "react";
import { Controller } from "react-hook-form";
import { PreferenceParamsModel } from "../../../../config/models/userModel";

interface PreferenceWrapperProps {
    title: string;
    subTitle: string;
    data: PreferenceParamsModel[];
    name: string;
    defaultValues: PreferenceParamsModel[];
    control: any;
}

export const PreferenceWrapper: React.FC<PreferenceWrapperProps> = ({title, subTitle, data, name, defaultValues, control}) => {
    const defaultIds = defaultValues.map((item) => item.id);

    return (
        <fieldset>
            <legend className="text-sm/6 font-semibold text-gray-900">{title}</legend>
            <p className="mt-1 text-sm/6 text-gray-600">{subTitle}</p>
            <div className="mt-6 space-y-6">
                {data &&
                    data.map((item) => (
                        <div key={item.id} className="flex items-center gap-x-3">
                            <Controller
                                name={name}
                                control={control}
                                defaultValue={defaultIds} // Ensure default value is set
                                render={({ field }) => {
                                    const value = field.value || []; // Default to an empty array
                                    const isChecked = value.includes(item.id);

                                    const handleChange = () => {
                                        // Toggle the item ID in the array
                                        const newValue = isChecked
                                            ? value.filter((id: number) => id !== item.id)
                                            : [...value, item.id];
                                        field.onChange(newValue);
                                    };

                                    return (
                                        <input
                                            type="checkbox"
                                            value={item.id}
                                            checked={isChecked}
                                            onChange={handleChange}
                                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                                        />
                                    );
                                }}
                            />
                            <label htmlFor={`checkbox_${item.id}`} className="block text-sm/6 font-medium text-gray-900">
                                {item.name}
                            </label>
                        </div>
                    ))}
            </div>
        </fieldset>
    );
};
