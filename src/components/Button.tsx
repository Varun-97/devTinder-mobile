import React from 'react'
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    TouchableOpacityProps,
    TextStyle,
} from 'react-native'
import { colors } from '../theme/colors'
import { fontSize } from '../theme/typography'
import { vmin, vh, vw } from '../utils/dimensions'

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    loading?: boolean;
    variant?: 'primary' | 'outline';
    textStyle?: TextStyle;
}

const Button = ({ title, loading = false, variant = 'primary', style, disabled, textStyle, ...rest }: ButtonProps) => {
    const isPrimary = variant === 'primary'

    return (
        <TouchableOpacity
            style={[
                styles.base,
                isPrimary ? styles.primary : styles.outline,
                (disabled || loading) && styles.disabled,
                style,
            ]}
            activeOpacity={0.8}
            disabled={disabled || loading}
            {...rest}
        >
            {loading ? (
                <ActivityIndicator color={isPrimary ? colors.levender : colors.cyan} />
            ) : (
                <Text style={[styles.text, isPrimary ? styles.primaryText : styles.outlineText, textStyle]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    base: {
        width: '100%',
        height: vh(48),
        borderRadius: vmin(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: vh(12),
    },
    primary: {
        backgroundColor: colors.darkTeal,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: colors.teal,
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: fontSize.regular,
        fontWeight: '700',
        color: colors.levender,
        letterSpacing: 0.5,
    },
    outlineText: {
        color: colors.lightMint,
    },
    primaryText: {
        color: colors.lightMint,
    },
})
