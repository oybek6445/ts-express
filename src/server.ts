import express from 'express'
import dotenv from 'dotenv'
import bookRoutes from './routes/bookRoutes'
dotenv.config()

let expressApp = express()
expressApp.use(express.json())
const PORT = 3000

expressApp.use('/', bookRoutes)

expressApp.listen(PORT, () => {
    console.log(`server ${PORT}da ishga tushdi`)
})
