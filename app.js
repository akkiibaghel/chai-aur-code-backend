require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/home', (req, res) => res.send('jai shree Ram'))

app.get('/abhi' , (req , res) =>{
    res.send("<h1> Jai shree Ram </h1>")
})

app.listen(process.env.port, () => console.log(`Example app listening on port ${port}!`))