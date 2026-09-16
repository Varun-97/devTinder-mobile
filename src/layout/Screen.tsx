import { KeyboardAvoidingView, Platform, StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';
import { vmin } from '../utils/dimensions';
import Loader from '../components/Loader';

interface ScreenProps {
    children: React.ReactNode;
}

const Screen = ({ children }: ScreenProps) => {
    const keyboardBehavior = Platform.OS === 'ios' ? 'padding' : undefined;
    const insets = useSafeAreaInsets();
    const containerStyle: ViewStyle = {
        flex: 1,
        backgroundColor: colors.darkBlue,
        paddingTop: insets.top,
        // paddingBottom: insets.bottom,
    };

    return (
        <KeyboardAvoidingView
            behavior={keyboardBehavior}
            style={[styles.flex]}
        >
            <View style={containerStyle}>
                {children}
                <Loader />
            </View>
        </KeyboardAvoidingView>
    )
}

export default Screen

const styles = StyleSheet.create({
    flex: {
        flex: 1
    }
})