import { Person } from '../types'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { PersonDetailsFormContent } from './PersonDetailsFormContent'

interface Props {
  person?: Person
}

export const PersonDetails: React.FC<Props> = ({ person }) => {
  const formValues = useForm({
    defaultValues: person,
  })

  return (
    <FormProvider {...formValues}>
      <PersonDetailsFormContent />
    </FormProvider>
  )
}