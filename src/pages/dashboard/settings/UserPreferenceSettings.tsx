import React, {useEffect} from "react";
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, TextInputField} from "../../../component/form";
import {PreferenceWrapper} from "./components/PreferenceWrapper";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {fetchAdditionalData} from "../../../config/redux/app/appAction";


type Inputs = {
    category_ids: number[],
    author_ids: number[],
    source_ids: number[],
};

export const UserPreferenceSettings: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    const {categories, sources, authors,token} = useSelector((state: RootState) => state.app);

    const {register, handleSubmit} = useForm<Inputs>();
    //
    const onSubmit: SubmitHandler<Inputs> = (data)  => {
        console.log(data);
    }

    useEffect(() => {
        dispatch(fetchAdditionalData(token))
    }, []);

    return (
        <DashboardLayoutWrapper pageTitle={"User Article Preference"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <PreferenceWrapper
                                name={"author_ids"}
                                data={authors}
                                register={register}
                                title={"Authors"}
                                subTitle={"These are delivered via SMS to your mobile phone."}
                            />

                            <PreferenceWrapper
                                name={"category_ids"}
                                data={categories}
                                title={"Categories"}
                                register={register}
                                subTitle={"These are delivered via SMS to your mobile phone."}
                            />

                            <PreferenceWrapper
                                name={"source_ids"}
                                data={sources}
                                title={"New Sources"}
                                register={register}
                                subTitle={"These are delivered via SMS to your mobile phone."}/>
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




