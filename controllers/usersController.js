const users = require('../models').users

module.exports = {
  create (req, res) {
    users.sync()
      .then(() => {
        return users.create({
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          email: req.body.email,
          nickname: req.body.nickname
        })
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },

  getUsers (req, res) {
    users.findAll({
      where: {
        $or: [
          {
            first_name: {
              $iLike: `%${req.params.searchterm}%`
            }
          },
          {
            last_name: {
              $iLike: `%${req.params.searchterm}%`
            }
          },
          {
            nickname: {
              $iLike: `%${req.params.searchterm}%`
            }
          }
        ]
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
