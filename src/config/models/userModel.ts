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




//https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80

export interface UserModel{
    name:string;
    email:string;
    image_url : string;
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
        image_url:string
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
export interface  UpdatePreferenceRespModel{
    status:boolean;
    message:string;
    data:UserPreferenceModel;
}