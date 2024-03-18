import { useMutation } from "@tanstack/react-query";
import { addEvent as addEventApi, deleteEvent, editEvent } from "../../services/apiEvents";

export function useAddEvent() {
  return useMutation({
    mutationFn: (body) => addEventApi(body),
    onSuccess: (data) => {
      console.log("res",data)

    //   if (res?.isError) throw new Error(res.message);
    },
  });

}

export function useEditEvent(id) {
  return useMutation({
    mutationFn: (body) => editEvent(id,body),
    onSuccess: (data) => {
      console.log("res",data)

    //   if (res?.isError) throw new Error(res.message);
    },
  });

}

export function useDeleteEvent(){
  return useMutation({
    mutationFn: (id) => deleteEvent(id),
    onSuccess: (data) => {
      console.log("res",data)

    //   if (res?.isError) throw new Error(res.message);
    },
  });
}