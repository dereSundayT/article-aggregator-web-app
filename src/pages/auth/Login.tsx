import React from 'react';
import {AuthLayoutWrapper} from "./layout/AuthLayoutWrapper";
import {urls} from "../../config/url";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../../config/redux/store";
import {ErrorMessage, Spinner, SuccessMessage} from "../../component";
import {useForm} from "react-hook-form";
import {LoginReqPayloadModel} from "../../config/models/userModel";
import {loginUser} from "../../config/redux/user/userAction";
import {Button, GeneralInputField, PasswordInputField} from "../../component/form";

export const Login: React.FC = () => {
    const {isUserLoading, userErrors, error_msg, success_msg} = useSelector((state: RootState) => state.user);
    const {register, handleSubmit, formState: {errors}, reset} = useForm<LoginReqPayloadModel>();
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>();

    const onSubmit = async (data: LoginReqPayloadModel) => {
        const result = await dispatch(loginUser(data));
        if (loginUser.fulfilled.match(result)) {
            reset();
            navigate(urls.dashboard);
        }
    };


    return (
        <AuthLayoutWrapper
            pageTitle={"Sign in to your account"}
            callToActionText={"Not a member?"}
            actionLink={urls.register}
            actionLinkText={"Register"}>

            {success_msg && <SuccessMessage message={success_msg}/>}
            {errors && <ErrorMessage message={error_msg}/>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <GeneralInputField
                    inputType={'email'}
                    register={register}
                    name={'email'}
                    label={'Email address'}
                    error={errors.email?.message}
                />

                <PasswordInputField
                    showForgotPasswordText={true}
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


                <div className={'mt-3'}>
                    {
                        isUserLoading
                            ? <Spinner/>
                            : <Button actionType={"submit"} btnText={"Sign in"} className={'btn-primary'}/>
                    }
                </div>
            </form>

        </AuthLayoutWrapper>
    );
}

