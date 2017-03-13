const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 8080
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

require('./routes')(app)

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the blog api of the century'
}))

app.listen(port)
