import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../features/home/screens/Home'
import Profile from '../features/profile/screens/Profile'
import EditProfile from '../features/editProfile/screen/EditProfile'

const Stack = createNativeStackNavigator()

const MainNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Profile' component={Profile} />
            <Stack.Screen name='EditProfile' component={EditProfile} />
        </Stack.Navigator>
    )
}

export default MainNavigation