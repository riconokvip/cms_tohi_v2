import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiLogin";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ userName, password }) => loginApi({ userName, password }),
    onSuccess: (res) => {
      if (res.data.code !== 200) throw new Error(res.data.message);
      localStorage.setItem("user", JSON.stringify(res.data.data));
    },
  });

  return { login, isLoading };
}
