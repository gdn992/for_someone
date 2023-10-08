import AddIcon from '@mui/icons-material/Add'
import { IconButton, ListItem } from '@mui/material'
import List from '@mui/material/List'
import React from 'react'

import { Person } from '../../types'

import { PersonListItem } from './PersonListItem'

interface Props {
  persons: Person[]
}

export const PersonsList: React.FC<Props> = ({ persons }) => {
  return (
    <List sx={{ width: 250 }}>
      {persons.map((person) => (
        <PersonListItem person={person} />
      ))}
      <ListItem sx={{ justifyContent: 'center' }}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </ListItem>
    </List>
  )
}
