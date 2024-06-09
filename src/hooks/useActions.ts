import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '@/services/providers/favorites/favorites.slice'
import { AppDispatch } from '@/services/providers/store'
const rootActions = {
  ...actions,
}
export const useAppDispatch: () => AppDispatch = useDispatch
export const useActions = () => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
