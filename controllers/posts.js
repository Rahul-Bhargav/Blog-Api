const users = require('../models').users
const posts = require('../models').posts

module.exports = {
  create (req, res) {
    posts.sync()
    .then(() => {
      return users.findById(req.body.userId)
    })
    .then((user) => {
      console.log(req.body.images)
      return posts.create({
        title: req.body.title,
        content: req.body.content,
        // images: req.body.images,
        userId: user.get('id')
      })
    })
    .then(post => {
      res.status(201).send(post)
    })
    .catch(error => res.status(400).send(error))
  }
}
