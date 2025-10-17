import { useState, useEffect } from 'react'

/**
 * Hook per gestire l'hydration e evitare mismatch tra server e client
 * @returns boolean che indica se il componente è stato idratato
 */
export function useHydration() {
  const [isHydrated, setIsHydrated] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return isHydrated
}

/**
 * Hook per gestire valori che cambiano tra server e client
 * @param serverValue - Valore da usare durante il server-side rendering
 * @param clientValue - Valore da usare dopo l'hydration
 * @returns Il valore appropriato basato sullo stato di hydration
 */
export function useHydratedValue<T>(serverValue: T, clientValue: T): T {
  const isHydrated = useHydration()
  return isHydrated ? clientValue : serverValue
}
