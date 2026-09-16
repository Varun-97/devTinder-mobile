import client from "../../../api/client"
import { ENDPOINTS } from "../../../api/endPoints"
import { EditProfileApiType } from "../../../types/userType";

const editProfileApi = async (data: EditProfileApiType) => {
    const response = await client.patch(ENDPOINTS.USER.PROFILE_EDIT, data);
    return response.data;
}

export default editProfileApi;