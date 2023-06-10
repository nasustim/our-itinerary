import '@/globals.css'
import { type ReactNode, type FC  } from 'react'

type Props = {
  children: ReactNode
}

export const RootLayout: FC<Props> = ({children}) => {
  return <html lang="ja">
    <body className='md:container md:mx-auto'>{children}</body>
  </html>
}