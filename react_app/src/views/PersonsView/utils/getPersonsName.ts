import { Person } from '../../../types'

export const getPersonsName = (name: Person['name']) =>
  `${name.first} ${name.last}`
