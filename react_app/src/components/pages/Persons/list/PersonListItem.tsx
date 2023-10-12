import DeleteIcon from '@mui/icons-material/Delete'
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material'
import { useDeletePersons } from 'api/hooks/person'
import { useNavigate } from 'react-router-dom'
import { Person } from 'types/api/Person'
import { getPersonsName } from '../utils/getPersonsName'

export const PersonListItem = ({
  person: { id, name, games, url }
}: {
  person: Person
}) => {
  const { mutateAsync } = useDeletePersons(id)
  const navigate = useNavigate()

  const handleDelete = async () => {
    await mutateAsync()
  }

  const handleSelectPerson = () => {
    navigate(`/persons/${id}`)
  }

  return (
    <ListItem
      key={id}
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          color={'error'}
          onClick={handleDelete}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemButton onClick={handleSelectPerson}>
        <ListItemAvatar>
          <Avatar src={url} />
        </ListItemAvatar>
        <ListItemText
          primary={getPersonsName(name)}
          secondary={`${games.length} games`}
        />
      </ListItemButton>
    </ListItem>
  )
}
