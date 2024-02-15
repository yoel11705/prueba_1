import isEmpty from 'lodash.isempty'

import { Loader } from './Loader'

interface ComponentProps<T> {
  isLoading: boolean
  data: T
  EmptyComponent: React.ReactNode
  NonEmptyComponent: React.ReactNode
}

export function EmptyComponentWrapper<T>({
  data,
  EmptyComponent,
  NonEmptyComponent,
  isLoading,
}: ComponentProps<T>) {
  return <div>{isLoading ? <Loader /> : isEmpty(data) ? EmptyComponent : NonEmptyComponent}</div>
}
