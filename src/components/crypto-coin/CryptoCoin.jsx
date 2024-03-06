import { useActions } from '@/hooks/useActions'
import { useFavorites } from '@/hooks/useFavorites'
import React from 'react'
export default function CryptoCoin({ coin }) {
  const { favorites } = useFavorites()
  
  const { toggleFavorites } = useActions()
  const isExists = favorites.some((c) => c.id === coin.id)

  console.log(favorites)

  return (
    <div>
      <h3>{coin.name}</h3>
      <button onClick={() => toggleFavorites(coin)}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  )
}
