import { useEffect, useState } from 'react'

const parseStorageValue = (storage: Storage, key: string) => {
  try {
    const storageItem = storage.getItem(key)
    return JSON.parse(storageItem!)
  } catch (error) {
    storage.removeItem(key)
  }
}

const useLocalStorage = (
  key: string,
  initialValue?: any,
  sessionOnly: boolean = false,
) => {
  const storage = sessionOnly ? sessionStorage : localStorage
  const [value, _setValue] = useState(() => {
    if (storage) {
      const storageValue = parseStorageValue(storage, key)
      if (storageValue !== null) return storageValue
    }

    return initialValue
  })

  const setValue = (newValue: any) => {
    if (typeof newValue === 'function') newValue = newValue(value)
    storage.setItem(key, JSON.stringify(newValue))
    _setValue(newValue)
  }

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key === key) {
        const storageValue = parseStorageValue(storage, key)
        _setValue(storageValue !== null ? storageValue : initialValue)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [key, storage, initialValue])

  return [value, setValue]
}

export default useLocalStorage
