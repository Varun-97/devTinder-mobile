import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useCallback, useEffect } from 'react'
import Screen from '../../../layout/Screen'
import { colors } from '../../../theme/colors'
import { vh, vmin } from '../../../utils/dimensions'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Button'
import useLoginMutation from '../api/useLoginMutation'

const Login = () => {
    const { mutate: loginMutate, isPending } = useLoginMutation()
    const [email, setEmail] = useState('happy@gmail.com')
    const [password, setPassword] = useState('Test@123')

    useEffect(() => {
        fetch('http://16.171.28.248/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'happy@gmail.com',
                password: 'Test@123',
            }),
        })
            .then(async response => {
                console.log('STATUS:', response.status);
                console.log('BODY:', await response.text());
            })
            .catch(error => {
                console.log('FETCH ERROR:', error);
            });
    }, [])

    const handleOnChange = useCallback((text: string) => {
        setEmail(text)
    }, [])

    const handleOnChangePassword = useCallback((text: string) => {
        setPassword(text)
    }, [])

    const handleLogin = useCallback(() => {
        loginMutate({ email, password })
    }, [email, password, loginMutate])

    return (
        <Screen>
            <View style={styles.container}>
                <View style={styles.loginWrapper}>
                    <Text style={styles.header}>Welcome To DevTinder</Text>
                    <TextInput placeholder='email' value={email} onChangeText={handleOnChange} label='Email' style={styles.inputStyle} />
                    <TextInput placeholder='password' value={password} onChangeText={handleOnChangePassword} label='Password' style={styles.inputStyle} />
                    <Button title={isPending ? 'Logging in...' : 'Login'} variant='primary' onPress={handleLogin} disabled={isPending} />
                </View>
            </View>
        </Screen>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: vmin(15),
    },
    loginWrapper: {
        width: '100%',
        height: vh(550),
        borderRadius: vmin(10),
        backgroundColor: colors.darkBlue,
        alignItems: 'center',
        justifyContent: 'center',
        padding: vmin(15),
        boxShadow: '0px 2px 5px 0px #888888',
    },
    header: {
        fontSize: vmin(25),
        fontWeight: 'bold',
        marginBottom: vh(25),
        color: colors.levender
    },
    inputStyle: {
        marginBottom: vh(15),
        backgroundColor: colors.levender
    }

})