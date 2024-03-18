import { APIClient } from "./axiosBase";
import { EVENTS_ENDPOINT_KEY } from "./endpoints";
//GET - /event
export const  getEvents = (PageIndex,PageSize) => APIClient.get(EVENTS_ENDPOINT_KEY,{
    PageIndex,
    PageSize
})

//POST - /event
export  const addEvent =(body) =>APIClient.post("/event", body);


//PUT - /event/:eventId
export  const editEvent =(id,body) =>APIClient.put(`/event/${id}`, body,{
    headers:{
        "Content-Type": "multipart/form-data"
    }
});

//DELETE - /event/:eventId
export const deleteEvent=(id) => APIClient.patch(`/event/${id}`)


//GET - /event/device-type
export function getEventDeviceType() {}

//GET - /event/event-types
export function getEventType() {}






