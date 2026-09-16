import { useQueryClient } from "@tanstack/react-query";
import feedApi from "./feedApi";

const useFeedQuery = () => {
    const queryClient = useQueryClient();
    const getFeedData = async () => {
        const data = await queryClient.fetchQuery({
            queryKey: ['feed'],
            queryFn: feedApi
        })
        return data
    }
    return getFeedData
}
export default useFeedQuery