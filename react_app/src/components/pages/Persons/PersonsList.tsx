import AddIcon from '@mui/icons-material/Add'
import { IconButton, ListItem } from '@mui/material'
import List from '@mui/material/List'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Person } from '../../../types'

import { PersonListItem } from './PersonListItem'

interface Props {
  persons: Person[]
}

export const PersonsList: React.FC<Props> = ({ persons }) => {
  const navigate = useNavigate()
  return (
    <List sx={{ width: 250 }}>
      {persons.map((person) => (
        <PersonListItem person={person} />
      ))}
      <ListItem sx={{ justifyContent: 'center' }}>
        <IconButton onClick={() => navigate('new')}>
          <AddIcon />
        </IconButton>
      </ListItem>
    </List>
  )
}
