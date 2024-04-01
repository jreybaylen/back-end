import dotenv from 'dotenv'
import express from 'express'

import { ENV_PATH } from '@lib/constants'
import { Logger } from '@utils/Logger'
import { Cluster } from '@utils/Cluster'
import { AuthRoute } from '@src/routes/auth.route'

const app = express()
const logger = new Logger()

try {
	new Cluster(function() {
		dotenv.config({ path: ENV_PATH })
		app
			.use(express.json())
			.use(express.static('public'))
			.use('/auth', AuthRoute)
			.listen(
				process.env.PORT,
				function() {
					logger.info(`Auth service is now running at ${ process.env.HOST }:${ process.env.PORT }`)
				}
			)
	})
} catch (error) {
	logger.error(error as object)
}
