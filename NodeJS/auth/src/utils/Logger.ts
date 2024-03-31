import { format, createLogger, transports } from 'winston'
import { format as dateFormat } from 'date-fns'

export class Logger {
	#timestamp = dateFormat(new Date(), 'MM-dd-yyyy')
	#logger = createLogger({
		format: format.combine(format.timestamp(), format.json()),
		transports: [
			new transports.Console(),
			new transports.File({
				handleExceptions: true,
				filename: `logs/${this.#timestamp}/log.txt`
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
