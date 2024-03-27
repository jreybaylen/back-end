import { App } from 'uWebSockets.js'

import { HelloWorld } from './api/hello-world.mjs'

const PORT = 2024
const uWebSockets = App()

const HelloWorldAPI = new HelloWorld()

uWebSockets.get(
    '/hello-world',
    HelloWorldAPI.greeting
)

uWebSockets.listen(PORT, function (token) {
    console.log(`${ token ? 'Listening to port' : 'Failed to listen to port' }: ${ PORT }`)
})

