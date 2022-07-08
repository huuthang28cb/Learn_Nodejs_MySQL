const mysql = require("mysql");
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "curd"
})

connection.connect((err) => {
    if (!err) {
        console.log("Conected!")
    }
    else {
        console.log("Connected err: " + err)
    }
})

module.exports = connection;