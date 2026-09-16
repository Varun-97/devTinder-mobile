import client from "../../../api/client"
import { ENDPOINTS } from "../../../api/endPoints"

const logoutApi = async () => {
    await client.post(ENDPOINTS.AUTH.LOGOUT)
}

export default logoutApi