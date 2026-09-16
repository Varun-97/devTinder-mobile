import client from "../../../api/client"
import { ENDPOINTS } from "../../../api/endPoints"
import { UserProfile } from "../../../types/userType"

export const profileApi = async (): Promise<{ user: UserProfile }> => {
    const res = await client.get<{ user: UserProfile }>(ENDPOINTS.USER.PROFILE)
    return res.data
}