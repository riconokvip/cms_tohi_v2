import {
  // useMutation,
  useQuery,
} from "@tanstack/react-query";
import { getUserDetail, getUsers } from "../apiUsers";
import { QUERY_KEY_USER, QUERY_KEY_USER_DETAIL } from "./queriesKeyConts";


export const useGetUsers = (PageIndex, PageSize, keepPreviousData) => {
  return useQuery({
    queryKey: [QUERY_KEY_USER, PageIndex],
    queryFn: () => getUsers(PageIndex, PageSize),
    placeholderData: keepPreviousData,
    staleTime:10*1000
  });
};

export const useGetUserDetail = (userId) => {
  return useQuery({
    queryKey: [QUERY_KEY_USER_DETAIL, userId],
    queryFn: () => getUserDetail(userId),
  });
};

