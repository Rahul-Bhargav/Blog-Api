const usersController = require('../controllers').users
const postController = require('../controllers').posts
const followersController = require('../controllers').followers

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Blog API!'
  }))

  app.post('/api/createuser', usersController.create)

  app.get('/api/getuser/:searchterm', usersController.getUsers)

  app.post('/api/createpost', postController.create)

  app.get('/api/getpost/:userid', postController.getPosts)

  app.post('/api/followuser/:userid', followersController.create)

  app.get('/api/getfollowers/:userid', followersController.getFollowers)

  app.get('/api/getfollowing/:userid', followersController.getFollowing)
}
