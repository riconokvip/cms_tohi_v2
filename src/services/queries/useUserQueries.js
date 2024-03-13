import { useMutation, useQuery } from "@tanstack/react-query";
import apiClient from "../apiClient";
import { USER_ENDPOINT_KEY } from "../endpoints";

const QUERY_KEY = ['User'];

const getUsers = async () => {
    const { data } = await apiClient.get(USER_ENDPOINT_KEY);
    console.log(data);
    return data;
}

const updateUser = async (body) => {
    const { data } = await apiClient.put(USER_ENDPOINT_KEY, body);
    return data;
}

export const useGetUsers = () => {
    return useQuery({queryKey: QUERY_KEY, getUsers, enabled: false});
}

export const useUpdateUser = () => {
    return useMutation(updateUser, {
        onSuccess: (data) => {
            // handle success
        },
        onError: (error) => {
            // handle error
        },
    });
};