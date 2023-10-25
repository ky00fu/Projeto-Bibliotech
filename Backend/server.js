const express = require('express')
const cors = require('cors')

const router = require('./src/routes/routes.js')

const app = express()
app.use(express.json())
app.use(cors())
app.use('/', router)

// app.listen(2000, () => {
//     console.info('[Server running on 2000]')
// } )

app.listen(3000, () => {
    console.info('[Server running on 3000]')
} )