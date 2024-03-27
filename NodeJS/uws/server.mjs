import { App } from 'uWebSockets.js'
import * as DotENV from 'dotenv'

import { Logger } from './utils/logger.mjs'

import { HelloWorld } from './api/hello-world.mjs'

const PORT = 2024
const uWebSockets = App()
const LoggerAPI = new Logger()

try {
    const HelloWorldAPI = new HelloWorld()

    DotENV.config()

    uWebSockets
        .get(
            '/hello-world',
            HelloWorldAPI.greeting
        )
        .listen(PORT, function (token) {
            if (!token) {
                throw new Error(`Failed to listen to port ${ PORT }`)
            }
            
            LoggerAPI.info(`Listening to port ${ PORT }`)
        })
} catch (error) {
    LoggerAPI.error(error.message)
}

