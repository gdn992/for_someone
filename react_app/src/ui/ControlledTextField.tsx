import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FieldPath, FieldValues } from 'react-hook-form/dist/types'

interface Props2<T extends FieldValues> {
  name: FieldPath<T>
}

export const ControlledTextField = <T extends FieldValues>({
  name
}: Props2<T>) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <TextField {...field} />}
    />
  )
}
