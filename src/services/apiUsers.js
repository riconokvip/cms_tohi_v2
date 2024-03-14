import {  APIClient } from "./axiosBase";
import { USER_DETAIL_ENDPOINT_KEY, USER_ENDPOINT_KEY } from "./endpoints";

export const  getUsers = (PageIndex,PageSize) => APIClient.get(USER_ENDPOINT_KEY,{
        PageIndex,
        PageSize
})
export const  getUserDetail = (userId) =>  APIClient.get(`${USER_DETAIL_ENDPOINT_KEY}/${userId}`)
