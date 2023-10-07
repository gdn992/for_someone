import React, { useMemo } from 'react'
import List from '@mui/material/List'
import axios from 'axios'
import { useQuery } from 'react-query'
import { Person } from '../types'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'

import FolderIcon from '@mui/icons-material/Folder'
import DeleteIcon from '@mui/icons-material/Delete'

const PERSONS_URL = 'persons'

const getPersons = () => axios.get<Person[]>(PERSONS_URL)

const useGetPersons = () => {
  return useQuery({
    queryFn: getPersons,
    queryKey: ['person', 'list'],
    select: ({ data }) => data,
  })
}

const Persons: React.FC = () => {
  const { data: persons } = useGetPersons()
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  const memoisedPersons = useMemo(() => persons ?? [], [persons])

  return (
    <List dense={dense}>
      {memoisedPersons.map((person) => (
        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete">
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar >
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Single-line item"
            secondary={secondary ? 'Secondary text' : null}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default Persons
