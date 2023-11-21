import { useQuery } from "@tanstack/react-query";
import { client } from "../server/client";
const useGetQuery = (key, query) => {
  const queryData = useQuery({
    queryKey: [key],
    queryFn: () => client.fetch(query).then((res) => res),
  });
  return queryData;
};
export default useGetQuery;