const server = Bun.serve({
	port: 3000,
	fetch() {
		return new Response("Welcome to Bun!");
	}
})

console.log(`Listening on localhost:${server.port}`);