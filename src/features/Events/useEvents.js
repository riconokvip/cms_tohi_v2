import { useMutation } from "@tanstack/react-query";
import { addEvent as addEventApi } from "../../services/apiEvents";

export function useAddEvent() {
  const { mutate, isLoading } = useMutation({
    mutationFn: (body) => addEventApi(body),
    onSuccess: (res) => {
      console.log("res",res)

    //   if (res?.isError) throw new Error(res.message);
    },
  });

  return { login, isLoading };
}
