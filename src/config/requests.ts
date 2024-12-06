import axios, { AxiosRequestConfig } from "axios";
import { ApiResponseModel } from "./models/model";

const getHeaders = (token: string, queryParams: any = null): AxiosRequestConfig => ({
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(queryParams && { params: queryParams }), // Add queryParams if present
});

const handleResponse = (res: any): ApiResponseModel => {

    if (res.status >= 200 && res.status <= 299) {
        return res.data as ApiResponseModel;
    }
    return {
        status: false,
        message: 'Unexpected response status',
        data: null,
    };
};

const handleError = (error: any): ApiResponseModel => {

    if (error.response) {
        if (error.response.status === 401) {
            return {
                status: false,
                message: 'Unauthenticated',
                data: null,
            };
        }

        const msg = error.response.data.errors ?? error.response.data.message;
        return {
            status: false,
            message: msg,
            data: error.response.data.data,
        };
    }
    return {
        status: false,
        message: error.message,
        data: null,
    };
};

/**
 * Get Request
 * @param token - Authorization token
 * @param url - Endpoint URL
 * @param queryParam - Query parameters for the request
 */
export const getRequest = async (token: string, url: string, queryParam: any = null): Promise<ApiResponseModel> => {
    const options = getHeaders(token, queryParam);
    try {
        const res = await axios.get(url, options);
        return handleResponse(res);
    } catch (error: any) {
        return handleError(error);
    }
};

/**
 * Patch Request
 * @param token - Authorization token
 * @param url - Endpoint URL
 * @param updateData - Data to update
 */
export const patchRequest = async (token: string, url: string, updateData: any): Promise<ApiResponseModel> => {
    const options = getHeaders(token);
    try {
        const res = await axios.patch(url, updateData, options);
        return handleResponse(res);
    } catch (error: any) {
        return handleError(error);
    }
};


/**
 * Post Request
 * @param token - Authorization token
 * @param url - Endpoint URL
 * @param postData - Data to post
 */
export const postRequest = async (token: string, url: string, postData: any): Promise<ApiResponseModel> => {
    const options = getHeaders(token);
    try {
        const res = await axios.post(url, postData, options);
        return handleResponse(res);
    } catch (error: any) {
        return handleError(error);
    }
};