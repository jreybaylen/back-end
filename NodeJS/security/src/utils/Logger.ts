import dateFNS from 'date-fns'
import { format, createLogger, transports } from 'winston'

import { version } from '@root/package.json'

export class Logger {

	#isProductionENV = process.env.NODE_ENV !== 'development'
	
	#timestamp = dateFNS.format(new Date(), 'MM-dd-yyyy')

	#logger = createLogger({
		format: format.combine(
			format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
			format.json()
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
			new transports.Console({
				format: format.combine(
					format.colorize({ all: true }),
					format.prettyPrint()
				)
			}),
			new transports.File({
				handleExceptions: true,
				filename: `logs/${ this.#timestamp }/combine.log`
			}),
			new transports.File({
				handleExceptions: true,
				level: 'error',
				filename: `logs/${ this.#timestamp }/error.log`
			})
		]
	})

	info = (message: string | object) => {
		if (this.#isProductionENV) {
			this.#logger.info(message)
		}
	}

	warn = (message: string | object) => {
		if (this.#isProductionENV) {
			this.#logger.warn(message)
		}
	}

	crit = (message: string | object) => {
		if (this.#isProductionENV) {
			this.#logger.crit(message)
		}
	}

	error = (message: string | object) => {
		if (this.#isProductionENV) {
			this.#logger.error(message)
		}
	}

}
