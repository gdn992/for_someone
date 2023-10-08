import { Skeleton, Stack } from '@mui/material'
import React from 'react'

interface IListSkeletonProps {
  count?: number
}

const ListSkeleton: React.FC<IListSkeletonProps> = ({ count = 6 }) => {
  return (
    <Stack spacing={1} padding={'12px 0'}>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton
          key={index}
          width={250}
          style={{ padding: 0 }}
          height={64}
          variant={'rounded'}
        />
      ))}
    </Stack>
  )
}

export default ListSkeleton
