import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { z } from "zod";
import Screen from '../../../layout/Screen'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import EditProfileField from '../components/EditProfileField'
import { useProfileStore } from '../../../store/useProfileStore'
import { vh, vmin } from '../../../utils/dimensions'
import { colors } from '../../../theme/colors'
import ImagePicker from "react-native-image-crop-picker";
import Ionicons from '@react-native-vector-icons/ionicons'
import useEditProfileMutation from '../api/useEditProfileMutation';

const EditProfileSchema = z.object({
    about: z.string().max(500, 'About must be less than 500 characters'),
    skill: z.array(z.string()).max(500, 'Skill must be less than 20 characters').optional(),
});

const EditProfile = () => {
    const { profile } = useProfileStore()
    const [firstName, setFirstName] = useState(profile?.firstName ?? '')
    const [lastName, setLastName] = useState(profile?.lastName ?? '')
    const [email, setEmail] = useState(profile?.email ?? '')
    const [about, setAbout] = useState(profile?.about ?? '')
    const [skill, setSkill] = useState(
        Array.isArray(profile?.skill) ? profile.skill.join(', ') : profile?.skill ?? ''
    )
    console.log("Array.isArray(profile?.skill)", Array.isArray(profile?.skill))
    const [profileImage, setProfileImage] = useState(profile?.photoUrl)
    const [error, setError] = useState({})
    const { mutate: editProfileMutate } = useEditProfileMutation()


    const handlChhosePhoto = async () => {
        try {
            const image = await ImagePicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = useCallback(() => {
        const skillArray = skill.split(',').map(s => s.trim()).filter(Boolean)
        try {
            EditProfileSchema.parse({
                about: about,
                skill: skillArray,
            })
            const updatedData = {
                about: about,
                skill: skillArray,
            }
            editProfileMutate(updatedData)
        } catch (e) {
            console.log("error", e)
            const validateError = e as z.ZodError
            validateError.issues.map((err) => {
                setError(prev => ({ ...prev, [err.path[0]]: err.message }))
            })
        }
    }, [firstName, lastName, email, about, skill])


    return (
        <Screen>
            <Header headerText='Edit Profile' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Profile Photo */}
                <View style={styles.imageWrapper}>
                    {profile?.photoUrl ? (
                        <Image
                            source={{ uri: profileImage }}
                            style={styles.profileImage}
                        />
                    ) : (
                        <View style={[styles.profileImage, styles.profilePlaceholder]} />
                    )}
                    <TouchableOpacity style={styles.cameraButton} onPress={handlChhosePhoto}>
                        <Ionicons name="camera" size={vmin(18)} color={colors.levender} />
                    </TouchableOpacity>
                </View>

                {/* Editable Fields */}
                <EditProfileField
                    label='First Name'
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder='Enter first name'
                    readOnly
                />
                <EditProfileField
                    label='Last Name'
                    value={lastName}
                    onChangeText={setLastName}
                    placeholder='Enter last name'
                    readOnly
                />
                <EditProfileField
                    label='Email'
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Enter email'
                    keyboardType='email-address'
                    autoCapitalize='none'
                    readOnly
                />
                <EditProfileField
                    label='About'
                    value={about}
                    onChangeText={setAbout}
                    placeholder='Tell something about yourself...'
                    multiline
                    numberOfLines={3}
                    style={styles.multilineInput}
                />
                <EditProfileField
                    label='Skill - Provide skills by coma ","'
                    value={skill}
                    onChangeText={setSkill}
                    placeholder='e.g. React, Node, Python'
                />

                <Button
                    title='Save Changes'
                    onPress={handleSave}
                    style={styles.button}
                />
            </ScrollView>
        </Screen>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    scrollContent: {
        paddingBottom: vh(30),
    },
    imageWrapper: {
        alignSelf: 'center',
        marginVertical: vh(20),
    },
    profileImage: {
        width: vh(120),
        height: vh(120),
        borderRadius: vmin(100),
        backgroundColor: colors.levender,
    },
    profilePlaceholder: {
        backgroundColor: colors.levender,
    },
    cameraButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: colors.darkTeal,
        width: vmin(32),
        height: vmin(32),
        borderRadius: vmin(16),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: colors.levender,
    },
    multilineInput: {
        height: vh(90),
        textAlignVertical: 'top',
        paddingTop: vmin(10),
        backgroundColor: colors.levender,
        borderRadius: vmin(5),
        fontSize: vmin(16),
        paddingHorizontal: vh(5)
    },
    button: {
        width: '90%',
        alignSelf: 'center',
        marginTop: vh(10),
    },
})