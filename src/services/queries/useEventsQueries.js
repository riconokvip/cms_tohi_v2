import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY_EVENT } from "./queriesKeyConts";

import {getEvents} from "../apiEvents"



export const useGetEvents = (PageIndex,PageSize,keepPreviousData) => {
    return useQuery({
    queryKey: [QUERY_KEY_EVENT, PageIndex],
    queryFn: () => getEvents(PageIndex, PageSize),
    placeholderData: keepPreviousData,
  });
}