import express from 'express'
import router from './routes/index.js'
import {DEV_PORT} from './config/index.js'
import underConstruction from './middleware/uc-middleware.js'

const app = express()
const port = process.env || '8000'

// Applicatin middleware
app.use(underConstruction)
// set template engine ejs
app.set('view engine', 'ejs')

// load routes
app.use(router)


app.listen(DEV_PORT, (req, res)=>{
    console.log(`App listening on http://localhost:${DEV_PORT}`);
})