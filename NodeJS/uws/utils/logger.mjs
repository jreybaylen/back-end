import { createLogger, format, transports } from 'winston'

export class Logger {

    #timestamp = new Date().toISOString()
    #winston = createLogger({
        format: format.json(),
        transports: [
            new transports.Console({
                format: format.prettyPrint()
            }),
            new transports.File({
                handleExceptions: true,
                filename: `./logs/${ this.#timestamp.slice(0, 10) }/log.txt`
            })
        ]
    })

    /**
     * 
     * @param {string} message 
     */
    info = (message) => {
        this.#winston.info({
            message,
            date: this.#timestamp
        })
    }

    /**
     * 
     * @param {string} message 
     */
    error = (message) => {
        this.#winston.error({
            message,
            date: this.#timestamp
        })
    }

}
