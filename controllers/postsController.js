const posts = require('../models').posts

module.exports = {
  create (req, res) {
    posts.sync()
      .then(() => {
        return posts.create({
          title: req.body.title,
          content: req.body.content,
          images: req.body.images.split(','),
          userId: req.body.userId
        })
      })
      .then(post => {
        console.log(post)
        res.status(201).send(post)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  },

  getPosts (req, res) {
    posts.findAll({
      where: {
        'userId': req.params.userid
      }
    })
      .then(result => {
        res.status(201).send(result)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  }
}
