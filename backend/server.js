import express from 'express'
import cors from 'cors'
import config from './config.js'

const app = express()
app.use(cors())

app.listen(config.PORT, () => {
	console.log(`serve at http://localhost:5000`)
})