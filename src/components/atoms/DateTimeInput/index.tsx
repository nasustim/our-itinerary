import {useMemo, useState } from 'react'

export const DateTimeInput = () => {
  const [value, setValue] = useState<string>('')

  // 一旦バリデーションなしでこのままにしておく
  return <input type="text" className={`border rounded-md space-x-4 border-blue-800`} value={value} onChange={(e) => { setValue(e.target.value ?? '') }} />
}
