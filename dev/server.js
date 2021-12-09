var http = require('http')

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(require("cors")())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.send('Estou vivo')
})
 
var server = http.createServer(app); 
server.listen(3001);
console.log("Servidor escutando na porta 3030...")