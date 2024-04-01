import winston from 'winston'
import dateFNS from 'date-fns'

export class Logger {
	
	#timestamp = dateFNS.format(new Date(), 'MM-dd-yyyy')

	#logger = winston.createLogger({
		format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
		transports: [
			new winston.transports.Console(),
			new winston.transports.File({
				handleExceptions: true,
				filename: `logs/${ this.#timestamp }/log.txt`
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
