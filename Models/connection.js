const mysql = require('mysql2')
 
const connection = mysql.createConnection({
    host: 'db4free.net',
    user: 'super123',
    password: 'asdfghjkl',
    database: 'mi_assets',
    port:3306
})

connection.connect();
console.log("database is connected!");

module.exports = connection.promise();