import {type FC} from 'react'
import { format } from 'date-fns'

type Props = {
  value: Date
}

export const DateTimeDisplay: FC<Props> = ({value}) => {
  return <p>{format(value, "yyyy-MM-dd hh:mm:ss")}</p>
}