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
import {Spinner, SuccessMessage} from "../../../component";

export const UserPreferenceSettings: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { categories, sources, authors } = useSelector((state: RootState) => state.app);
    const { preferences,token,isUserLoading,success_msg } = useSelector((state: RootState) => state.user);
    //Setup useForm
    const { handleSubmit,control } = useForm<UserPreferenceFormModel>();

    // Submit preference form
    const onSubmit: SubmitHandler<UserPreferenceFormModel> = (data) => {
        dispatch(updateUserPreference({ token, data }));
    };

    useEffect(() => {
        dispatch(getUserPreference(token));
        dispatch(fetchAdditionalData(token));
    }, [dispatch, token]);

    return (
        <DashboardLayoutWrapper pageTitle={"User Preference"}>
            {success_msg && <SuccessMessage message={success_msg} />}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-10">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 space-y-10">
                            <PreferenceWrapper
                                control={control}
                                defaultValues={preferences?.authors ?? []}
                                name={"author_ids"}
                                data={authors}
                                title={"Authors"}
                                subTitle={"Select your favorite authors to get their latest articles."}
                            />

                            <PreferenceWrapper
                                control={control}
                                defaultValues={preferences?.categories ?? []}
                                name={"category_ids"}
                                data={categories}
                                title={"Categories"}
                                subTitle={"Select your favorite categories to get the latest articles."}
                            />

                            <PreferenceWrapper
                                control={control}
                                defaultValues={preferences?.sources ?? []}
                                name={"source_ids"}
                                data={sources}
                                title={"New Sources"}
                                subTitle={"Select your favorite sources to get the latest articles."}
                            />
                        </div>
                    </div>
                </div>
                {success_msg && <SuccessMessage message={success_msg} />}
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {
                        isUserLoading?
                            <Spinner/>
                            :
                            <Button actionType={'submit'} btnText={"Save"} />
                    }

                </div>
            </form>
        </DashboardLayoutWrapper>
    );
};