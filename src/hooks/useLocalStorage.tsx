import { useEffect, useState } from 'react'

export function useLocalStorage<T>(item: string, initialValue: any) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const value = localStorage.getItem(item)
    if (value) setValue(JSON.parse(value))
  }, [value.length])

  const updateLocalStorage = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(item, JSON.stringify(newValue))
  }

  return {
    value,
    updateLocalStorage,
  }
}
