import { createClient } from "@libsql/client"
import dotenv from 'dotenv'

dotenv.config()

export const connection = createClient({
    url: process.env.URL,
    authToken: process.env.AUTH
})