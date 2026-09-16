import React, { useState, useEffect } from 'react';
import { tokenStorage } from '../utils/tokenStorage'
import { AuthContext } from '../context/AuthContext';
import useLoadingStore from '../store/useLoadingStore';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const { isLoading, setLoading } = useLoadingStore()

    useEffect(() => {
        const loadToken = async () => {
            const token = await tokenStorage.getAccessToken();
            setUserToken(token);
            setLoading(false);
        };
        loadToken();
    }, []);

    const login = async (token: string) => {
        await tokenStorage.setToken(token);
        setUserToken(token);
    };

    const logout = async () => {
        await tokenStorage.clearToken();
        setUserToken(null);
    };

    return (
        <AuthContext.Provider value={{ userToken, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;