import { useUnit } from 'effector-react'
import { $favorites } from '@/services/providers/favorites/favorites'

export const useFavorites = () => {
  const favorites = useUnit($favorites)
  return { favorites }
}