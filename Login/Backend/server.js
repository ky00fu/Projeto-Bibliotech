const PORT = 3000
const express = require('express')
const cors = require('cors')

const router = require('./src/routes/usuarios')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/', router)

app.listen(PORT, () => {
    console.log("Funcionando na porta " + PORT)
})