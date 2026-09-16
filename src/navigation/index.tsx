import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './AuthNavigation'
import MainNavigation from './MainNavigation'
import useAuth from '../hooks/useAuth'
import Loader from '../components/Loader'

const AppNavigation = () => {
    const { userToken } = useAuth()
    return (
        <NavigationContainer>
            {
                userToken ?
                    <MainNavigation /> :
                    <AuthNavigation />
            }
        </NavigationContainer>
    )
}

export default AppNavigation