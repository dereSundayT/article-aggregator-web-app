import axios from "axios";
import {ApiResponseModel} from "./models/model";

const getHeaders = (token: string, queryParams: any = null) => {
    return {
        headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
        },
        ...(queryParams && { params: queryParams }), // Add queryParams if present
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

        if (res.status >= 200 && res.status <= 299) {
            return res.data as ApiResponseModel;
        }

        return {
            status: false,
            message: 'Unexpected response status',
            data: null,
        };

    } catch (error: any) {
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
                data: null,
            };
        }

        return {
            status: false,
            message: error.message,
            data: null,
        };
    }
};
