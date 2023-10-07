import { Person } from '../types'
import { PERSONS_URL } from './endpoints'
import axios from 'axios'

export const getPersons = () => axios.get<Person[]>(PERSONS_URL)

export const deletePersons = (id: Person['id']) =>
  axios.delete<Person[]>(`${PERSONS_URL}/${id}`)
