import { Skeleton } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useParams } from 'react-router-dom'

import { useGetPerson } from '../../api/hooks/person'

import { PersonDetailsForm, Props } from './PersonDetailsForm'

export const PersonDetails: React.FC<Props> = () => {
  const { id } = useParams()
  if (id === undefined) {
    return <PersonDetailsForm />
  }

  const { data, isLoading } = useGetPerson(parseInt(id))

  return isLoading ? (
    <Skeleton />
  ) : data ? (
    <PersonDetailsForm person={data} />
  ) : (
    <Typography color="error">Something went wrong</Typography>
  )
}
