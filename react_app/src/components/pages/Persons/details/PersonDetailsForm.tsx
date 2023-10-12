import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@mui/material/Button'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Person } from 'types/api/Person'
import * as yup from 'yup'
import { PersonDetailsFormContent } from './PersonDetailsFormContent'

const schema = yup.object().shape({
  name: yup.object().shape({
    first: yup.string().nullable().required('this field is required'),
    last: yup.string().nullable().required('this field is required')
  })
})

export interface Props {
  person?: Person
}

export const PersonDetailsForm: React.FC<Props> = ({ person }) => {
  const formValues = useForm({
    defaultValues: person,
    resolver: yupResolver(schema)
  })
  const saveForm = async (value) => {
    console.log(value)
  }
  return (
    <FormProvider {...formValues}>
      <form onSubmit={formValues.handleSubmit(saveForm)}>
        <PersonDetailsFormContent />
        <Button type={'submit'}>asdf</Button>
      </form>
    </FormProvider>
  )
}
