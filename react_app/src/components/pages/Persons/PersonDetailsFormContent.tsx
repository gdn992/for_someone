import { Avatar, TextField } from '@mui/material'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { ControlledTextField } from 'ui/ControlledTextField'

import { Person } from '../../../types'

export const PersonDetailsFormContent = () => {
  const { control, getValues } = useFormContext<Person>()

  return (
    <>
      <Avatar src={getValues('url')} />
      <ControlledTextField<Person> name="name.first" />
      <ControlledTextField<Person> name="name.last" />
      <Controller
        name={'description'}
        control={control}
        render={({ field }) => <TextField {...field} />}
      />
    </>
  )
}