import { StyleSheet, Text, TextInput, View, TextInputProps } from 'react-native'
import React from 'react'
import { vh, vmin } from '../../../utils/dimensions'
import { colors } from '../../../theme/colors'
import { fontSize } from '../../../theme/typography'

interface EditProfileFieldProps extends TextInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
}

const EditProfileField = ({ label, value, onChangeText, ...rest }: EditProfileFieldProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor={colors.bluishWhite}
                {...rest}
            />
        </View>
    )
}

export default EditProfileField

const styles = StyleSheet.create({
    container: {
        width: '90%',
        rowGap: vmin(10),
        marginBottom: vmin(20),
        alignSelf: 'center',
    },
    label: {
        color: colors.levender,
        fontSize: fontSize.regular,
    },
    input: {
        height: vh(40),
        borderRadius: vmin(4),
        borderWidth: vmin(1),
        borderColor: colors.levender,
        paddingHorizontal: vmin(5),
        backgroundColor: colors.levender,
        color: colors.darkBlue,
        fontSize: fontSize.regular,
    },
})
