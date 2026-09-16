import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../features/auth/screens/Login'

const AuthStack = createNativeStackNavigator()
const AuthNavigation = () => {
    return (
        <AuthStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <AuthStack.Screen name='Login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigation