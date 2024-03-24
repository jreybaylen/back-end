import { App } from 'uWebSockets.js'

const PORT = 2024
const uWebSockets = App()

uWebSockets
    .get('/*', (res) => {
        res.end('Hello World!')
    })
    .listen(PORT, function (token) {
        console.log( token ? 'Listening to port ' : 'Failed to listen to port ' + PORT)
    })

