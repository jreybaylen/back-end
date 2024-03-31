export class HelloWorld {

    #message = 'Hello World! - NodeJS'
    
    /**
     * 
     * @param { import("uWebSockets.js").HttpResponse } response - Required
     * @param { import("uWebSockets.js").HttpRequest } request - Optional
     */
    greeting = (response) => {
        response.end(this.#message)
    }

}
