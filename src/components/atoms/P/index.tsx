import {type FC} from 'react'

type Props = {
  value: string
}

export const P: FC<Props> = ({value}) => {
  return <p>{value}</p>
}