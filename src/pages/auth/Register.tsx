import React from "react";
import { urls } from "../../config/url";
import { AuthLayoutWrapper } from "./layout/AuthLayoutWrapper";
import { Button, GeneralInputField, PasswordInputField } from "../../component/form";
import { useForm } from "react-hook-form";
import { RegistrationReqPayloadModel } from "../../config/models/userModel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../config/redux/store";
import { registerUser } from "../../config/redux/user/userAction";
import { Spinner } from "../../component";
import {useNavigate} from "react-router-dom";

export const Register: React.FC = () => {
    const { isUserLoading,userErrors,error_msg } = useSelector((state: RootState) => state.user);
    const { register, handleSubmit,watch, formState: { errors }, reset } = useForm<RegistrationReqPayloadModel>();
    const passwordWatch = watch('password');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    const onSubmit = async (data: RegistrationReqPayloadModel) => {
        const result = await dispatch(registerUser(data));
        if (registerUser.fulfilled.match(result)) {
            reset();
            navigate(urls.login);
        }
    };

    return (
        <AuthLayoutWrapper
            pageTitle={"Create a new account"}
            callToActionText={"Already a member?"}
            actionLink={urls.login}
            actionLinkText={"Login"}>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                <GeneralInputField inputType={'text'} register={register} isRequired={true} name={'name'} label={'Name'}
                                   error={errors.name?.message ?? ''}/>
                <GeneralInputField inputType={'email'} register={register} isRequired={true} name={'email'}
                                   label={'Email address'} error={errors.email?.message ?? ''}/>

                <PasswordInputField
                    showForgotPassword={false}
                    register={register}
                    label={'Password'}
                    name={"password"}
                    error={
                    errors.password?.message
                        ?
                        errors.password?.message
                        :
                        userErrors?.password?.[0] ?? ''
                }
                />
                <PasswordInputField
                    showForgotPassword={false}
                    register={register}
                    label={'Confirm Password'}
                    name={"password_confirmation"}
                    error={errors.password_confirmation?.message ?? ''}
                    passwordWatch={passwordWatch}
                />

                <div className={'mt-3'}>
                    {
                        isUserLoading
                            ? <Spinner/>
                            : <Button actionType={"submit"} btnText={"Create Account"} className={'btn-primary'}/>
                    }
                </div>
            </form>
        </AuthLayoutWrapper>
    );
};