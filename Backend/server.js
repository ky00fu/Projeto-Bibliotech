const express = require('express')
const cors = require('cors')
// const server = 2000
const server = 3000

const router = require('./src/routes/routes.js')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(server, () => {
    console.info('Server running on ' + server)
} )