const users = require('../models').users

module.exports = {
  create (req, res) {
    return users
      .create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        nickname: req.body.nickname,
        password: req.body.password
      })
      .then(user => res.status(201).snd(user))
      .catch(error => res.status(400).send(error))
  }
}
