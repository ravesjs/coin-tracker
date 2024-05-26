import { useSelector, TypedUseSelectorHook } from 'react-redux'
import {RootState} from '@/services/providers/store'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useFavorites = () => {
  const favorites = useAppSelector((state: RootState) => state.favorites)

  return { favorites }
}
