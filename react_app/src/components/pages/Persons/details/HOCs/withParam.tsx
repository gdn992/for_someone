import * as R from 'ramda'
import { FC } from 'react'
import { useParams } from 'react-router-dom'

interface ComponentProps {
  param: string
}

export const withParam =
  (WrappedComponent: FC<ComponentProps>, path: string[]) => () => {
    const params = useParams<string>()
    const wantedParam = R.path<string>(path, params)

    if (wantedParam) {
      return <WrappedComponent param={wantedParam} />
    }

    return null
  }
