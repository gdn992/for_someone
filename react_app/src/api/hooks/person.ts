import { useMutation, useQuery, useQueryClient } from 'react-query'
import { deletePersons, getPersons } from '../getPersons'

export const useGetPersons = () => {
  return useQuery({
    queryFn: getPersons,
    queryKey: ['person', 'list'],
    select: ({ data }) => data,
    staleTime: 60000
  })
}

export const useDeletePersons = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: deletePersons,
    onSuccess: () => queryClient.invalidateQueries(['person', 'list'])
  })
}
