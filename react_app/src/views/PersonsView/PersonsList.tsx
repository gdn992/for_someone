import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material'
import List from '@mui/material/List'
import React from 'react'

import { useDeletePersons } from '../../api/hooks/person'
import { Person } from '../../types'

import { getPersonsName } from './utils/getPersonsName'

interface Props {
  persons: Person[]
  onPersonSelected: (person: Person) => void
}

export const PersonsList: React.FC<Props> = ({ persons, onPersonSelected }) => {
  const { mutateAsync } = useDeletePersons()
  const handleDelete = async (id: Person['id']) => {
    await mutateAsync(id)
  }

  return (
    <List sx={{ width: 250 }}>
      {persons.map((person) => (
        <ListItem
          key={person.id}
          disablePadding
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              color={'error'}
              onClick={() => handleDelete(person.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton onClick={() => onPersonSelected(person)}>
            <ListItemAvatar>
              <Avatar src={person.url} />
            </ListItemAvatar>
            <ListItemText
              primary={getPersonsName(person.name)}
              secondary={`${person.games.length} games`}
            />
          </ListItemButton>
        </ListItem>
      ))}
      <ListItem sx={{ justifyContent: 'center' }}>
        <IconButton>
          <AddIcon />
        </IconButton>
      </ListItem>
    </List>
  )
}
