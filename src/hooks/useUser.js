import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "../redux/slice/userSlice";
import authService from "../services/user-service";
import { toast } from "react-toastify";
import { useMutation, useQuery } from "@tanstack/react-query";
import { closeModal } from "../redux/slice/modalSlice";
import { tokenService } from "../services/token-service";

export const useRegister = () => {
    const mutation = useMutation({
        mutationFn: authService.apiRegister,
        onSuccess: (data) => {
            console.log(data);
            toast.success(data?.message, {
                icon: "🚀",
            });
        },
        onError: (error) => {
            toast.error(error?.message, {
                icon: "❌",
            });
        },
    });

    return mutation;
};

export const useLogin = () => {
    const dispatch = useDispatch();

    const mutation = useMutation({
        mutationFn: authService.apiLogin,
        onSuccess: (data) => {
            dispatch(closeModal());
            tokenService().setTokenList(data?.tokenList);
            toast.success(data?.message, {
                icon: "🚀",
            });
        },
        onError: (error) => {
            toast.error(error?.message, {
                icon: "❌",
            });
        },
    });

    return mutation;
};

const useUserQuery = (userId, accessToken) => {
    const dispatch = useDispatch();

    const userQuery = useQuery({
        queryKey: ["user", userId],
        queryFn: () => authService.apiGetUserById(userId, accessToken),
        enabled: userId !== undefined,
        staleTime: Infinity,

        // staleTime: 1000 * 10,
    });

    useEffect(() => {
        if (userQuery.data) {
            dispatch(setUser(userQuery.data?.user));
            toast.success(userQuery.data?.message, {
                icon: "🚀",
            });
        } else {
            toast.error(userQuery.data?.message, {
                icon: "❌",
            });
        }
    }, [userQuery.data, dispatch]);

    return userQuery;
};

export default useUserQuery;
