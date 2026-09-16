import { useMutation } from "@tanstack/react-query"
import editProfileApi from "./editProfileApi"
import { EditProfileApiType } from "../../../types/userType"
import { queryClient } from "../../../config/queryClient"
import { profileApi } from "../../home/api/profileApi"
import { useProfileStore } from "../../../store/useProfileStore"
import { useNavigation } from "@react-navigation/native"

const useEditProfileMutation = () => {
    const { setProfile } = useProfileStore()
    const navigation = useNavigation<any>()

    return useMutation({
        mutationKey: ['edit-profile'],
        mutationFn: (data: EditProfileApiType) => editProfileApi(data),
        onSuccess: async (response) => {
            await queryClient.invalidateQueries({ queryKey: ['profile'] })
            setProfile(response.user)
            navigation.goBack()
        }
    })
}

export default useEditProfileMutation