import { Paper } from '@mui/material'
import ListSkeleton from 'components/ListSkeleton'
import React from 'react'
import { Outlet } from 'react-router-dom'

import { useGetPersons } from '../../api/hooks/person'

import { PersonsList } from './PersonsList'

const Persons: React.FC = () => {
  const { data: persons, isFetching } = useGetPersons()

  return (
    <Paper elevation={1} sx={{ display: 'flex' }}>
      {isFetching ? <ListSkeleton /> : <PersonsList persons={persons ?? []} />}
      <Outlet />
    </Paper>
  )
}

export default Persons
