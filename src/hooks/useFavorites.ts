import { useSelector } from 'react-redux'
import {RootState} from '@/services/providers/store'

export const useFavorites = () => {
  const favorites = useSelector((state: RootState) => state.favorites)

  return { favorites }
}
