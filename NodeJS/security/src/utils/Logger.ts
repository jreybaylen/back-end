import winston from 'winston'
import dateFNS from 'date-fns'

import { version } from '@root/package.json'

export class Logger {
	
	#timestamp = dateFNS.format(new Date(), 'MM-dd-yyyy')

	#logger = winston.createLogger({
		format: winston.format.combine(
			winston.format.timestamp(),
			winston.format.json()
		),
		defaultMeta: {
			service: 'security',
			buildInfo: {
				version: {
					service: version,
					node: process.version
				}
			}
		},
		transports: [
			new winston.transports.Console({
				format: winston.format.combine(
					winston.format.colorize(),
					winston.format.prettyPrint()
				)
			}),
			new winston.transports.File({
				handleExceptions: true,
				filename: `logs/${ this.#timestamp }/combine.log`
			}),
			new winston.transports.File({
				handleExceptions: true,
				level: 'error',
				filename: `logs/${ this.#timestamp }/error.log`
			})
		]
	})

	info = (message: string | object) => {
		this.#logger.info(message)
	}

	error = (message: string | object) => {
		this.#logger.error(message)
	}
}
