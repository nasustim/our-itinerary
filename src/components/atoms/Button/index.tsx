import {type FC} from 'react'

type Props = {
  label?: string
  onClick: () => void
}

export const Button: FC<Props> = ({onClick, label = 'OK'}) => {
  return <button onClick={() => onClick()} className='border px-4 py-1 border-blue-800 rounded-md'>{label}</button>
}