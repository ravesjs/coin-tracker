import { createQuery } from '@farfetched/core'
import axios from 'axios'
import {key} from '@/entities/coins/api/key'

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/coins/markets',
  params: { vs_currency: 'usd', locale: 'en' },
  headers: { accept: 'application/json', 'x-cg-demo-api-key': `${key}` },
}

export const coinsQuery = createQuery({
	handler: async () => {
		const res = await axios.request(options)
		return res.data
	}
})
coinsQuery.start()


      