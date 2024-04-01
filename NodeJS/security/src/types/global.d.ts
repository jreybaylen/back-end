declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'

		PORT: number
		HOST: string
		MONGO_DB_CONNECT: string
		MONGO_DB_NAME:string
	}
}
