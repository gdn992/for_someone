import { Person } from 'types/api/Person'

export const getPersonsName = (name: Person['name']) =>
  `${name.first} ${name.last}`
