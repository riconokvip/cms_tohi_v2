import { APIClient } from "./axiosBase";
import { EVENTS_ENDPOINT_KEY } from "./endpoints";

export const  getEvents = (PageIndex,PageSize) => APIClient.get(EVENTS_ENDPOINT_KEY,{
    PageIndex,
    PageSize
})

export  const addEvent =(body) =>APIClient.post("/event", body);
export  const editEvent =(id,body) =>APIClient.put(`/event/${id}`, body,{
    headers:{
        "Content-Type": "multipart/form-data"
    }
});

export const deleteEvent=(id) => APIClient.patch(`/event/${id}`)
