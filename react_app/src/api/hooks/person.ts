import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { Person } from 'types/api/Person'
import { deletePerson, getPerson, getPersons } from '../getPersons'

export const useGetPersons = () => {
  return useQuery({
    queryFn: getPersons,
    queryKey: ['person', 'list'],
    staleTime: 6000
  })
}
export const useGetPerson = (id: Person['id']) => {
  return useQuery({
    queryFn: getPerson,
    queryKey: ['person', id],
    staleTime: 6000
  })
}

export const useDeletePersons = (id: Person['id']) => {
  const queryClient = useQueryClient()
  const params = useParams()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: deletePerson(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['person', 'list'])
      if (params?.id === id.toString()) {
        navigate('/persons')
      }
    }
  })
}
