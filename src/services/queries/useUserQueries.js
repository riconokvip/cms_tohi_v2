// import { 
//     // useMutation, 
//     useQuery } from "@tanstack/react-query";
// // import apiClient from "../apiClient";
// // import { USER_ENDPOINT_KEY } from "../endpoints";
// import { getUsers } from "../apiUsers";
// export const QUERY_KEY = 'User';



// const updateUser = async (body) => {
//     const { data } = await apiClient.put(USER_ENDPOINT_KEY, body);
//     return data;
// }

// export const useGetUsers = (PageIndex,PageSize) => {
//    return useQuery({
//         queryKey: [QUERY_KEY,PageIndex],
//         queryFn:()=> getUsers(PageIndex,PageSize),
//    });
// }

// export const useUpdateUser = () => {
//     return useMutation(updateUser, {
//         onSuccess: (data) => {
//             // handle success
//         },
//         onError: (error) => {
//             // handle error
//         },
//     });
// };