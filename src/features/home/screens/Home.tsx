import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Screen from '../../../layout/Screen'
import { vh, vmin } from '../../../utils/dimensions'
import { useProfileStore } from '../../../store/useProfileStore'
import Header from '../../../components/Header'
import useInitData from '../api/useInitData'
import useFeedStore from '../../../store/useFeedStore'
import { colors } from '../../../theme/colors'
import Swiper from 'react-native-deck-swiper'
import UserCard from '../../../components/UserCard'

const Home = () => {
    useInitData()
    const { profile } = useProfileStore()
    const { feed } = useFeedStore()



    return (
        <Screen>
            <Header headerText='Feed' showLogoutIcon />
            <View style={styles.container}>
                <UserCard user={feed[0]} />
            </View>
        </Screen>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: vmin(15),
        backgroundColor: colors.levender
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        height: 10
    },
    text: {
        textAlign: "center",
        fontSize: vmin(20),
    }
})