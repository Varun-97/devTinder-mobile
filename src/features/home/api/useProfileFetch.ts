import { useQueryClient } from "@tanstack/react-query";
import { profileApi } from "./profileApi";

const useProfileFetch = () => {
    const queryClient = useQueryClient();
    const getProfileData = async () => {
        const data = await queryClient.fetchQuery({
            queryKey: ['profile'],
            queryFn: profileApi,
        })
        return data
    }
    return getProfileData
}

export default useProfileFetch
