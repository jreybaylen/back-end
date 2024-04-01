import dotenv from 'dotenv'
import express from 'express'

import { ENV_PATH } from '@lib/constants'
import { Logger, Cluster } from '@utils/index'

const app = express()
const logger = new Logger()

try {
	new Cluster(function() {
		dotenv.config({ path: ENV_PATH })
		app.listen(
			process.env.PORT,
			function() {
				logger.info(`Auth service is now running at ${ process.env.HOST }:${ process.env.PORT }`)
			}
		)
	})
} catch (error) {
	logger.error(error as object)
}
