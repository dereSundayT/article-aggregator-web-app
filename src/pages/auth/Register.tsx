import React from "react";
import {urls} from "../../config/url";
import {AuthLayoutWrapper} from "./layout/AuthLayoutWrapper";
import {Button, GeneralInputField, PasswordInputField} from "../../component/form";
import {useForm} from "react-hook-form";
import {RegistrationReqPayloadModel} from "../../config/models/userModel";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../config/redux/store";
import {registerUser} from "../../config/redux/user/userAction";
import {ErrorMessage, Spinner} from "../../component";
import {useNavigate} from "react-router-dom";
import {yupResolver} from '@hookform/resolvers/yup';
import {registerValidationSchema} from "../../config/form/validation";
import {clearErrorMessageFromBackend} from "../../config/redux/user/userSlice";


export const Register: React.FC = () => {
    //
    const navigate = useNavigate()
    //UseForm Setup
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<RegistrationReqPayloadModel>({resolver: yupResolver(registerValidationSchema)});
    //Get User State
    const {isUserLoading, userErrors, error_msg} = useSelector((state: RootState) => state.user);
    //Dispatch Setup
    const dispatch = useDispatch<AppDispatch>();



    const clearErrorMessage = (fieldName:string,fieldValue:any) => {
        dispatch(clearErrorMessageFromBackend(fieldName))
    }


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


            {error_msg && <ErrorMessage message={error_msg}/>}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

                <GeneralInputField
                    inputType={'text'}
                    register={register}
                    name={'name'}
                    label={'Name'}
                    onChange={userErrors?.name && clearErrorMessage}
                    error={
                        errors.name?.message
                            ?
                            errors.name?.message
                            :
                            userErrors?.name?.[0] ?? ''
                    }
                />

                <GeneralInputField
                    inputType={'email'}
                    register={register}
                    name={'email'}
                    label={'Email address'}
                    onChange={userErrors?.email && clearErrorMessage}
                    error={
                        errors.email?.message
                            ?
                            errors.email?.message
                            :
                            userErrors?.email?.[0] ?? ''
                    }
                />

                <PasswordInputField
                    showForgotPasswordText={false}
                    register={register}
                    label={'Password'}
                    name={"password"}
                    onChange={userErrors?.password && clearErrorMessage}
                    error={
                        errors.password?.message
                            ?
                            errors.password?.message
                            :
                            userErrors?.password?.[0] ?? ''
                    }
                />

                <PasswordInputField
                    showForgotPasswordText={false}
                    register={register}
                    label={'Confirm Password'}
                    name={"password_confirmation"}
                    error={errors.password_confirmation?.message ?? ''}
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