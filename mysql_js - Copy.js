//This is the connection info for the mysql db

var mysql = require('mysql');

//Set up the connection to MySQL
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : 4000,
    user     : 'root',
    password : 'Gargantua1!',
    database : 'reservation_db'
});