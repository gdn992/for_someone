import { Person } from '../types'
import { PERSONS_URL } from './endpoints'
import axios from 'axios'

export const getPersons = () => axios.get<Person[]>(PERSONS_URL)
