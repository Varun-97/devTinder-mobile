import client from '../../../api/client';
import { ENDPOINTS } from '../../../api/endPoints';

export type LoginPayload = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    message?: string;
};

export const loginApi = async (payload: LoginPayload): Promise<LoginResponse> => {
    const res = await client.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, payload);
    console.log("res", res)
    return res.data;
};
