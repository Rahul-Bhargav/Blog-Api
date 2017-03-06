const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Require our routes into the application.
require('./routes')(app)
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the blog api of the century.'
}))

app.listen(8080)
