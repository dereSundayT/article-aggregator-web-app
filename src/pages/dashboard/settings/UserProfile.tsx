import React from "react";
import {DashboardLayoutWrapper} from "../DashboardLayoutWrapper";
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, GeneralInputField} from "../../../component/form";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../config/redux/store";
import {userProfileValidationSchema} from "../../../config/form/validation";
import {yupResolver} from "@hookform/resolvers/yup";
import {updateUserProfile} from "../../../config/redux/user/userAction";
import {ErrorMessage, Spinner, SuccessMessage} from "../../../component";
import {clearErrorMessageFromBackend} from "../../../config/redux/user/userSlice";


interface UpdateUserProfileProps {
    email: string;
    name: string;
}

export const UserProfile: React.FC = () => {
    // Setup useForm
    const {register, handleSubmit, formState: {errors}} = useForm<UpdateUserProfileProps>({resolver: yupResolver(userProfileValidationSchema)});
    const dispatch = useDispatch<AppDispatch>();
    // Get user state
    const {token,user,isUserLoading,success_msg,error_msg,userErrors} = useSelector((state: RootState) => state.user);

    const onSubmit: SubmitHandler<UpdateUserProfileProps> = (data) => {
        const {name} = data;
        dispatch(updateUserProfile({token, data:{name}}))
    }

    const clearErrorMessage = (fieldName:string,fieldValue:any) => {
        dispatch(clearErrorMessageFromBackend(fieldName))
    }

    return (
        <DashboardLayoutWrapper pageTitle={"User Profile"}>

            {success_msg && <SuccessMessage message={success_msg}/>}
            {error_msg && <ErrorMessage message={error_msg}/>}

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
                        <p className="mt-1 text-sm/6 text-gray-600">Update personal details</p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <GeneralInputField
                                defaultValue={user?.name}
                                label={"Name"}
                                name={"name"}
                                register={register}
                                key={"name"}

                                onChange={userErrors?.name && clearErrorMessage}
                                error={
                                    errors.name?.message
                                        ?
                                        errors.name?.message
                                        :
                                        userErrors?.name?.[0] ?? ''
                                }
                                inputType={"text"}
                            />


                            <GeneralInputField
                                readonly={true}
                                defaultValue={user?.email}
                                label={"Email address"}
                                name={"email"}
                                register={register}
                                key={"email"}
                                error={errors.email?.message}
                                inputType={"email"}
                            />

                        </div>
                    </div>


                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    {
                        isUserLoading ?
                            <Spinner/>
                            :
                            <Button actionType={"submit"} btnText={"Save"}/>
                    }
                </div>
            </form>
        </DashboardLayoutWrapper>
    )
}