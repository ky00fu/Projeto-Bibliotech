const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    database: 'usuarios',
    user: 'root',
    timezone: 'utc'
})

module.exports = con