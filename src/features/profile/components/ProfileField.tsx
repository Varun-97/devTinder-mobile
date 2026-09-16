import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vh, vmin } from '../../../utils/dimensions'
import { colors } from '../../../theme/colors'
import { fontSize } from '../../../theme/typography'

interface ProfileFieldType {
    label: string,
    value: string | undefined,
}

const ProfileField = ({ label, value }: ProfileFieldType) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.valueContainer}>
                <Text style={styles.value}>{value}</Text>
            </View>
        </View>
    )
}

export default ProfileField

const styles = StyleSheet.create({
    container: {
        width: '90%',
        rowGap: vmin(10),
        marginBottom: vmin(20)
    },
    valueContainer: {
        height: vh(40),
        borderRadius: vmin(4),
        borderWidth: vmin(1),
        borderColor: colors.levender,
        justifyContent: 'center',
        paddingHorizontal: vmin(5),
        backgroundColor: colors.levender
    },
    label: {
        color: colors.levender,
        fontSize: fontSize.regular,
    },
    value: {
        color: colors.darkBlue,
        fontSize: fontSize.regular,
    }


})