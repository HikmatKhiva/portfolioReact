import { useQueries } from '@tanstack/react-query'
import { client } from '../server/client'
const useGetQueries = (queries) => {
  const queryData = useQueries({
    queries: queries.map((q) => {
      return {
        queryKey: ['portfoli', q],
        queryFn: () => client.fetch(q).then((res) => res),
      }
    }),
  })
  return queryData
}
export default useGetQueries