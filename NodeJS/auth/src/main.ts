import dotenv from 'dotenv'
import express from 'express'

import { Logger } from '@utils/Logger'
import { NODE_ENV } from '@lib/constants'

const app = express()
const logger = new Logger()
const path = `.env${NODE_ENV === 'development' ? '.local' : ''}`

try {
	dotenv.config({ path });
	app.listen(process.env.PORT, function () {
		logger.info(`Auth service is now running at ${process.env.HOST}:${process.env.PORT}`)
	})
} catch (error) {
	logger.error(error as object)
}
