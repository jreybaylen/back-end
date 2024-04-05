import { MongoClient } from 'mongodb'

import type { DeleteOptions, FindOptions, OptionalId } from 'mongodb'

import { Logger } from './Logger'

export class Database {
    
    #collection: string

    #logger = new Logger()

    #client?: MongoClient

    constructor(collection: string) {
        this.#collection = collection

        try {
            this.#client = new MongoClient(process.env.MONGO_DB_URI)
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot connect to the database client',
                error
            })
        }
    }

    collection = () => {
        try {
            return this.#client?.db(process.env.MONGO_DB_NAME).collection(this.#collection)
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot connect to the collection',
                error
            })
        }
    }

    find = async (options: FindOptions, isMany: boolean) => {
        try {
            const collection = this.collection()
            const results = isMany
                ? collection?.find(options)
                : await collection?.findOne(options)
            
            this.#logger.info({
                message: 'DB: get all data',
                data: options
            })

            return results
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot read the data',
                data: options,
                error
            })
        } finally {
            this.#client?.close()
        }
    }

    insert = async (items: OptionalId<Array<Document>>, isMany: boolean) => {
        try {
            const collection = this.collection()
            const results = isMany
                ? await collection?.insertMany(items)
                : await collection?.insertOne(items)
            
            this.#logger.info({
                message: 'DB: item has been successfully added',
                data: items
            })

            return results
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot insert the data',
                data: items,
                error
            })
        } finally {
            this.#client?.close()
        }
    }

    update = async (old: Document, modified: Document, isMany: boolean) => {
        try {
            const collection = this.collection()
            const results = isMany
                ? await collection?.updateMany(old, modified)
                : await collection?.updateOne(old, modified)
            
            this.#logger.info({
                message: 'DB: item has been successfully updated',
                data: {
                    old,
                    modified
                }
            })

            return results
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot update the data',
                data: {
                    old,
                    modified
                },
                error
            })
        } finally {
            this.#client?.close()
        }
    }

    delete = async (options: DeleteOptions, isMany: boolean) => {
        try {
            const collection = this.collection()
            const results = isMany
                ? await collection?.deleteMany(options)
                : await collection?.deleteOne(options)
            
            this.#logger.info({
                message: 'DB: item has been successfully deleted',
                data: options
            })

            return results
        } catch (error) {
            this.#logger.error({
                message: 'DB: cannot delete the data',
                data: options,
                error
            })
        } finally {
            this.#client?.close()
        }
    }

}
