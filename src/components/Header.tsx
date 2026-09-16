import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native'

import { vh, vmin, vw } from '../utils/dimensions'
import { fontSize } from '../theme/typography'
import { colors } from '../theme/colors'
import useLogoutMutation from '../features/home/api/useLogoutMutation'
import { useProfileStore } from '../store/useProfileStore'

const Header = ({ headerText, showLogoutIcon = false }: { headerText: string, showLogoutIcon?: boolean }) => {
    const navigation = useNavigation()
    const { mutate: logout } = useLogoutMutation()
    const { profile } = useProfileStore()
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}
                onPress={() => navigation.canGoBack() ? navigation.goBack() : navigation.navigate('Profile')}>
                {navigation.canGoBack() ?
                    <Ionicons name="arrow-back-sharp" size={vmin(24)} color={colors.levender} /> :
                    <View style={styles.profileIcon}>
                        {profile?.photoUrl ? <Image style={styles.profileIcon} source={{ uri: profile.photoUrl }} /> :
                            <Text style={styles.profileInitial}>{profile?.firstName[0]}</Text>}
                    </View>}
            </TouchableOpacity>

            <Text style={styles.header}>{headerText}</Text>
            <TouchableOpacity style={{ height: vh(30), width: vw(30) }} onPress={() => showLogoutIcon ? logout() : null}>
                {showLogoutIcon ? <Ionicons
                    name="log-out-outline"
                    size={vmin(30)}
                    color={colors.levender}
                /> : null}</TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: vh(60),
        backgroundColor: colors.darkBlue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: vmin(16)
    },
    header: {
        fontSize: fontSize.regular,
        color: colors.levender,
        fontWeight: '600',
        lineHeight: vmin(24)
    },
    profileIcon: {
        width: vw(40),
        height: vh(40),
        borderRadius: vmin(30),
        backgroundColor: colors.cyan,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileInitial: {
        textTransform: 'capitalize',
        color: colors.levender,
        fontSize: fontSize.regular,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})