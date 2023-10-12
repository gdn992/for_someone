import { Skeleton } from '@mui/material'
import Typography from '@mui/material/Typography'
import { FC } from 'react'
import { useGetPerson } from '../../../../api/hooks/person'
import { withParam } from './HOCs/withParam'
import { PersonDetailsForm } from './PersonDetailsForm'

interface Props {
  param: string
}

const PersonDetailsComponent: FC<Props> = ({ param: id }) => {
  const { data, isLoading } = useGetPerson(parseInt(id))

  if (isLoading) return <Skeleton />
  if (data) return <PersonDetailsForm person={data} />

  return <Typography color="error">Something went wrong</Typography>
}

export const PersonDetails = withParam(PersonDetailsComponent, ['id'])
