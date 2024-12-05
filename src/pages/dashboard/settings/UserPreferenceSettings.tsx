import React from "react";
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextInputField} from "../../../component/form";
import {PreferenceWrapper} from "./components/PreferenceWrapper";


type Inputs = {
    example: string,
    exampleRequired: string,
};

export const UserPreferenceSettings: React.FC = () => {
    const {register, handleSubmit, watch, formState: {errors}} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <DashboardLayoutWrapper pageTitle={"User Article Preference"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <PreferenceWrapper title={"Authors"} subTitle={"These are delivered via SMS to your mobile phone."}/>
                            <PreferenceWrapper title={"Categories"} subTitle={"These are delivered via SMS to your mobile phone."}/>
                            <PreferenceWrapper title={"New Sources"} subTitle={"These are delivered via SMS to your mobile phone."}/>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button actionType={"reset"} btnText={"Cancel"} className={"text-sm/6 font-semibold text-gray-900"}/>
                    <Button actionType={'submit'} btnText={"Save"}/>
                </div>
            </form>
        </DashboardLayoutWrapper>
    )
}




