import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { UserProfile } from '../types/userType'
import { vh, vmin, vw } from '../utils/dimensions';
import { colors } from '../theme/colors';
import { dummyProfileImage } from '../contants';
import Button from './Button';

interface UserCardProps {
    user: UserProfile;
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.profileStyle}>
                <Image source={{ uri: user?.photoUrl || dummyProfileImage }} style={styles.imageStyle} />
                <View>
                    <Text style={styles.textStyle} >{user?.firstName} {user?.lastName}</Text>
                    <Text style={styles.about} >{user?.about} </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', columnGap: vmin(20) }}>
                <Button style={[styles.button, { backgroundColor: colors.darkMaroon }]}
                    title='Ignore' textStyle={{ color: colors.lightRed }} />
                <Button style={styles.button} title='Intrested' textStyle={{ color: colors.lightMint }} />
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        minHeight: vh(450),
        width: '90%',
        borderRadius: vmin(10),
        borderWidth: 0.5,
        backgroundColor: colors.deepNavy,
        padding: vmin(16)
    },
    profileStyle: {
        height: vh(350),
        width: '100%',
        borderRadius: vmin(10),
        rowGap: vmin(10),
    },
    imageStyle: {
        width: '100%',
        height: vh(250),
        borderRadius: vmin(10),
        resizeMode: 'contain'
    },
    textStyle: {
        fontSize: vmin(20),
        fontWeight: 'bold',
        color: colors.levender,
    },
    about: {
        fontSize: vmin(16),
        fontWeight: '400',
        color: colors.levender,
        marginTop: vh(10)
    },
    button: {
        width: vw(100),
        height: vh(60),
        backgroundColor: colors.darkTeal
    }
})