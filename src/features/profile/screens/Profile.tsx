import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import Screen from '../../../layout/Screen'
import Header from '../../../components/Header'
import ProfileField from '../components/ProfileField'
import { useProfileStore } from '../../../store/useProfileStore'
import { UserProfile } from '../../../types/userType'
import { vh, vmin } from '../../../utils/dimensions'
import { colors } from '../../../theme/colors'
import Button from '../../../components/Button'
import { useNavigation } from '@react-navigation/native'

interface DisplayField {
    key: keyof UserProfile;
    label: string;
}

const DISPLAY_FIELDS: DisplayField[] = [
    { key: 'firstName', label: 'First Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'email', label: 'Email' },
    { key: 'about', label: 'About' },
    { key: 'skill', label: 'Skill' },
];

const Profile = () => {
    const { profile } = useProfileStore()
    const navigation = useNavigation()
    console.log("profile", profile)

    const handlePress = useCallback(() => {
        navigation.navigate('EditProfile')
    }, [])

    return (
        <Screen>
            <Header headerText='Profile' />
            <ScrollView>
                <View style={styles.ProfileImage}>
                    <Image source={{ uri: profile?.photoUrl }} style={styles.ProfileImage} />
                </View>
                {!profile ? null : <View style={styles.container}>
                    {DISPLAY_FIELDS.map(({ key, label }) => {
                        return <ProfileField key={key} label={label} value={String(profile[key])} />
                    })}
                </View>}
                <Button onPress={handlePress} title='Edit' style={styles.button} />
            </ScrollView>
        </Screen>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    ProfileImage: {
        width: vh(120),
        height: vh(120),
        borderRadius: vmin(100),
        resizeMode: 'cover',
        backgroundColor: colors.levender,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: colors.darkTeal,
        width: '90%',
        alignSelf: 'center',
        marginVertical: vh(20)
    }
})