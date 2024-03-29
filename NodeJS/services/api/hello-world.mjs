import { App } from 'uWebSockets.js' // Vercel Error

const PORT = 2024
const uWebSockets = App()

uWebSockets
    .get(
        '/hello-world',
        function(response) {
            response.end('Hello World!')
        }
    )
    .listen(PORT, function (token) {
        if (!token) {
            console.log(`Failed to listen to port ${ PORT }`)
        } else {
            console.log(`Listening to port ${ PORT }`)
        }
    })
