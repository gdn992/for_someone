import axios, { AxiosResponse } from 'axios'

import { Person } from '../types'

import { PERSONS_URL } from './endpoints'

const getData = <T>(response: AxiosResponse<T>): T => response.data

export const getPersons = async () =>
  getData(await axios.get<Person[]>(PERSONS_URL))

export const getPerson = async ({ queryKey }) =>
  getData(await axios.get<Person>(`${PERSONS_URL}/${queryKey[1]}`))

export const deletePerson = (id: Person['id']) => () =>
  axios.delete<Person[]>(`${PERSONS_URL}/${id}`)
