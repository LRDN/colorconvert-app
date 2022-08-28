import { useCallback, useEffect, useState } from 'react'

const useLocalStorage = (
  key: string,
  initialValue?: any,
  sessionOnly: boolean = false,
) => {
  const storage = sessionOnly ? sessionStorage : localStorage
  const getStorageValue = useCallback(() => {
    try {
      const storageItem = storage.getItem(key)
      return JSON.parse(storageItem!) ?? initialValue
    } catch {
      storage.removeItem(key)
      return initialValue
    }
  }, [key, storage, initialValue])

  const [value, _setValue] = useState(getStorageValue())

  const setValue = (newValue: any) => {
    if (typeof newValue === 'function') newValue = newValue(value)
    storage.setItem(key, JSON.stringify(newValue))
    _setValue(newValue)
  }

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) _setValue(getStorageValue())
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key, getStorageValue])

  return [value, setValue]
}

export default useLocalStorage
