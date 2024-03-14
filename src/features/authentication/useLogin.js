import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiLogin";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ userName, password }) => loginApi({ userName, password }),
    onSuccess: (res) => {
      console.log("res",res)
      if (res?.isError) throw new Error(res.message);
      localStorage.setItem("user", JSON.stringify(res.data));
    },
  });

  return { login, isLoading };
}
