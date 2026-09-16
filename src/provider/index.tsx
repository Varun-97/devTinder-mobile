import React, { ReactNode } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthProvider from './AuthProvider';

interface AppProvidersProps {
    children: ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </SafeAreaProvider>
    );
};

export default AppProviders;
