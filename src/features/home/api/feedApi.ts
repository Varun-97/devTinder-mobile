import client from "../../../api/client"
import { ENDPOINTS } from "../../../api/endPoints"

const feedApi = async () => {
    const res = await client.get(`${ENDPOINTS.USER.FEED}?page=0&limit=10`)
    return res.data
}

export default feedApi