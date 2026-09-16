import { useEffect } from "react"
import useFeedQuery from "./useFeedQuery"
import useProfileFetch from "./useProfileFetch"
import { useProfileStore } from "../../../store/useProfileStore"
import useFeedStore from "../../../store/useFeedStore"
import useLoadingStore from "../../../store/useLoadingStore"

const useInitData = () => {
    const getFeedData = useFeedQuery()
    const getProfileData = useProfileFetch()
    const { setProfile } = useProfileStore()
    const { setFeed } = useFeedStore()

    const { setLoading } = useLoadingStore()

    const initData = async () => {
        setLoading(true)
        try {
            const [resolvedProfile, resolvedFeed] = await Promise.allSettled([
                getProfileData(),
                getFeedData()
            ])
            if (resolvedProfile.status === 'fulfilled') {
                setProfile(resolvedProfile.value.user)
            }
            if (resolvedFeed.status === 'fulfilled') {
                setFeed(resolvedFeed.value.data)
            }
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        initData()
    }, [])

}

export default useInitData