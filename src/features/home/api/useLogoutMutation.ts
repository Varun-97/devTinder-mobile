import { Mutation, useMutation } from "@tanstack/react-query"
import logoutApi from "./logoutApi"
import { queryClient } from "../../../config/queryClient"
import useAuth from "../../../hooks/useAuth"


const useLogoutMutation = () => {
    const { logout } = useAuth()
    return useMutation({
        mutationKey: ['logout'],
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['profile'] })
            logout()
        }
    })
}

export default useLogoutMutation