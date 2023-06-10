import { RootLayout } from '@/components/layout'
import { type ReactNode } from 'react'

export const metadata = {
  title: 'top',
  description: '',
}

export default function Layout({
  children,
}: {
  children: ReactNode
}) {
  return <RootLayout>{children}</RootLayout>
}
