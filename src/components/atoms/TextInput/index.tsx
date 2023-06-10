import {useState } from 'react'

export const TextInput = () => {
  const [value, setValue] = useState<string>('')

  return <input type="text" className='border border-blue-800 rounded-md space-x-4' value={value} onChange={(e) => { setValue(e.target.value ?? '') }} />
}
