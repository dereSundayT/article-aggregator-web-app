import React from "react";
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, EmailInputField, TextInputField} from "../../../component/form";


interface Inputs  {
    email: string;
    last_name: string;
    first_name: string;
}

export const UserProfile: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    return (
        <DashboardLayoutWrapper pageTitle={"User Profile"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            <TextInputField
                                label={"First name"}
                                name={"first_name"}
                                register={register}
                                isRequired={true}
                                key={"first_name"}
                                error={errors.first_name?.message}
                                minLength={3}
                            />

                            <TextInputField
                                label={"Last name"}
                                name={"last_name"}
                                register={register}
                                isRequired={true}
                                key={"last_name"}
                                error={errors.last_name?.message}
                                minLength={3}
                            />

                            <EmailInputField label={"Email address"} name={"email"} register={register} isRequired={true} key={"email"} error={errors.email?.message}/>

                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                   <Button actionType={"reset"} btnText={"Cancel"}  className="text-sm/6 font-semibold text-gray-900"/>
                   <Button actionType={"submit"} btnText={"Save"}/>
                </div>
            </form>
        </DashboardLayoutWrapper>
    )
}