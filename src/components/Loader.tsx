import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import useLoadingStore from '../store/useLoadingStore'
import { colors } from '../theme/colors'

const Loader = () => {
    const { isLoading } = useLoadingStore()

    if (!isLoading) return null

    return (
        <View style={styles.overlay}>
            <View style={styles.box}>
                <ActivityIndicator size="large" color={colors.cyan} />
            </View>
        </View>
    )
}

export default Loader

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    },
    box: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 10,
    },
})
