import React, { useState } from 'react'
import { PersonsList } from './PersonsView/PersonsList'
import ListSkeleton from '../components/ListSkeleton'
import { Paper } from '@mui/material'
import { Person } from '../types'
import { useGetPersons } from '../api/hooks/person'
import { PersonDetails } from './PersonDetails'

const Persons: React.FC = () => {
  const { data: persons, isFetching } = useGetPersons()
  const [openDetails, setOpenDetails] = useState<boolean>(false)
  const [selectedPerson, setSelectedPerson] = useState<Person>()

  const handlePersonSelected = (person: Person) => {
    setSelectedPerson(person)
    setOpenDetails(true)
  }

  return (
    <Paper elevation={1} sx={{ display: 'flex' }}>
      <>
        {isFetching ? (
          <ListSkeleton />
        ) : (
          <PersonsList
            persons={persons ?? []}
            onPersonSelected={handlePersonSelected}
          />
        )}
        {openDetails && <PersonDetails person={selectedPerson} />}
      </>
    </Paper>
  )
}

export default Persons
