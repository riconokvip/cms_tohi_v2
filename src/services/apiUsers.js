import {  APIClient } from "./axiosBase";
import { USER_ENDPOINT_KEY } from "./endpoints";

export const  getUsers = (PageIndex,PageSize) =>   APIClient.get(USER_ENDPOINT_KEY,{
        PageIndex,
        PageSize
    })