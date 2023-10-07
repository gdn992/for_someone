import React, { useMemo } from 'react'
import List from '@mui/material/List'
import { useQuery } from 'react-query'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { getPersons } from '../api/getPersons'

const useGetPersons = () => {
  return useQuery({
    queryFn: getPersons,
    queryKey: ['person', 'list'],
    select: ({ data }) => data
  })
}

const Persons: React.FC = () => {
  const { data: persons } = useGetPersons()
  const [dense, setDense] = React.useState(false)
  const [secondary, setSecondary] = React.useState(false)

  const memoizePersons = useMemo(() => persons ?? [], [persons])

  return (
    <List dense={dense}>
      {memoizePersons.map((person) => (
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
