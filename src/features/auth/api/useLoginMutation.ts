import { useMutation } from '@tanstack/react-query';
import { loginApi, LoginPayload } from './authApi';
import useAuth from '../../../hooks/useAuth';

const useLoginMutation = () => {
    const { login } = useAuth();

    return useMutation({
        mutationKey: ['login'],
        mutationFn: (payload: LoginPayload) => loginApi(payload),
        onSuccess: (data) => {
            login(data.token);
        },
        onError: (error: any) => {
            console.error('Login failed:', error?.response?.data?.message ?? error.message);
        },
    });
};

export default useLoginMutation;
