const usersController = require('../controllers').users
const postController = require('../controllers').posts

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!'
  }))

  app.post('/api/createuser', usersController.create)

  app.post('/api/createpost', postController.create)
}
