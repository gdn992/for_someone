import { Avatar, TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { Person } from 'types/api/Person'
import { ControlledTextField } from 'ui/ControlledTextField'

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
