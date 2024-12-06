import React, { useEffect } from "react";
import { DashboardLayoutWrapper } from "../DashboardLayoutWrapper";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../../../component/form";
import { PreferenceWrapper } from "./components/PreferenceWrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../config/redux/store";
import { fetchAdditionalData } from "../../../config/redux/app/appAction";
import { getUserPreference, updateUserPreference } from "../../../config/redux/user/userAction";
import { UserPreferenceFormModel } from "../../../config/models/userModel";

export const UserPreferenceSettings: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, sources, authors, token } = useSelector((state: RootState) => state.app);
    const { preferences } = useSelector((state: RootState) => state.user);

    const { register, handleSubmit } = useForm<UserPreferenceFormModel>();

    // Submit preference form
    const onSubmit: SubmitHandler<UserPreferenceFormModel> = (data) => {
        dispatch(updateUserPreference({ token: token, data }));
    };

    useEffect(() => {
        dispatch(fetchAdditionalData(token));
        dispatch(getUserPreference(token));
    }, [dispatch, token]);

    return (
        <DashboardLayoutWrapper pageTitle={"User Article Preference"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <PreferenceWrapper
                                defaultValues={preferences?.authors ?? []}
                                name={"author_ids"}
                                data={authors}
                                title={"Authors"}
                                subTitle={"These are delivered via SMS to your mobile phone."}
                            />

                            <PreferenceWrapper
                                defaultValues={preferences?.categories ?? []}
                                name={"category_ids"}
                                data={categories}
                                title={"Categories"}
                                subTitle={"These are delivered via SMS to your mobile phone."}
                            />

                            <PreferenceWrapper
                                defaultValues={preferences?.sources ?? []}
                                name={"source_ids"}
                                data={sources}
                                title={"New Sources"}
                                subTitle={"These are delivered via SMS to your mobile phone."}
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button actionType={"reset"} btnText={"Cancel"} className={"text-sm/6 font-semibold text-gray-900"} />
                    <Button actionType={'submit'} btnText={"Save"} />
                </div>
            </form>
        </DashboardLayoutWrapper>
    );
};