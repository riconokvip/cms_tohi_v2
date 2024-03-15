import { APIClient } from "./axiosBase";
import { EVENTS_ENDPOINT_KEY } from "./endpoints";

export const  getEvents = (PageIndex,PageSize) => APIClient.get(EVENTS_ENDPOINT_KEY,{
    PageIndex,
    PageSize
})

export  const addEvent =(body) =>APIClient.post("/auth/login", body);