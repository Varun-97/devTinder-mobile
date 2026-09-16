import React from 'react'
import {
    TextInput as RNTextInput,
    TextInputProps,
    StyleSheet,
    View,
    Text,
} from 'react-native'
import { colors } from '../theme/colors'
import { fontSize } from '../theme/typography'
import { vmin, vh, vw } from '../utils/dimensions'

interface AppTextInputProps extends TextInputProps {
    label?: string;
    error?: string;
}

const TextInput = ({ label, error, style, ...rest }: AppTextInputProps) => {
    return (
        <View style={styles.wrapper}>
            {label && <Text style={styles.label}>{label}</Text>}
            <RNTextInput
                style={[styles.input, error ? styles.inputError : null, style]}
                placeholderTextColor="#9CA3AF"
                {...rest}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    )
}

export default TextInput

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginBottom: vh(12),
    },
    label: {
        fontSize: fontSize.small,
        fontWeight: '600',
        color: colors.levender,
        marginBottom: vh(4),
    },
    input: {
        width: '100%',
        height: vh(48),
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: vmin(8),
        paddingHorizontal: vw(12),
        fontSize: fontSize.regular,
        color: '#111827',
    },
    inputError: {
        borderColor: '#EF4444',
    },
    errorText: {
        fontSize: fontSize.small,
        color: '#EF4444',
        marginTop: vh(4),
    },
})
