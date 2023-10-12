import { Paper } from '@mui/material'
import { useGetPersons } from 'api/hooks/person'
import React from 'react'
import ListSkeleton from 'ui/ListSkeleton'
import { PersonsList } from './list/PersonsList'

const Persons: React.FC = () => {
  const { data: persons, isFetching } = useGetPersons()

  return (
    <Paper elevation={1} sx={{ display: 'flex' }}>
      {isFetching ? <ListSkeleton /> : <PersonsList persons={persons ?? []} />}
    </Paper>
  )
}

export default Persons
