export interface RegistrationReqPayloadModel{
    name:string;
    email:string;
    password:string;
    password_confirmation:string;
}

export interface LoginReqPayloadModel{
    email:string;
    password:string;
}

export interface LoginReqPayloadModel{
    email:string;
    password:string;
}

export interface LoginRespModel{
    status :boolean;
    data :{
        user: UserModel;
        token: string;
    }
    message:string;
}





export interface UserModel{
    name:string;
    email:string;
}

export interface UpdateUserProfilePayloadModel{
    token:string;
    data:{
        name:string
    };
}

export interface UpdateUserProfileRespModel{
    status:boolean;
    data:{
        name:string
        email:string
    };
    message:string;
}

export interface UpdatePreferencePayloadModel{
    token:string;
    data:any;
}

export interface UserPreferenceFormModel{
    category_ids: number[];
    author_ids: number[];
    source_ids: number[];
}

export interface PreferenceParamsModel  {
    name : string;
    id: number;
}

export interface UserPreferenceModel{
    categories : PreferenceParamsModel[];
    authors : PreferenceParamsModel[];
    sources : PreferenceParamsModel[];
}

export const UserPreferenceProps = {
    categories : [],
    authors : [],
    sources : []
}