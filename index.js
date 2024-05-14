const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
//desafio: criar uma rota [GET] /oi que retorne "olá, mundo!"
app.get('/oi', function (req, res){
  res.send("Olá Mundo!")
})

app.listen(3000)
