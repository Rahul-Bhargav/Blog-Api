const users = require('../models').users
const userAuthentications = require('../models').userauthentications

module.exports = {
  create (req, res) {
    users.sync()
      .then(() => {
        createUser(req)
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error))
  },

  getUsers (req, res) {
    searchUser(req.params.searchterm)
      .then(result => {
        res.status(201).send(result)
      })
      .catch(error => {
        console.log(error)
        res.status(400).send(error)
      })
  }
}

const searchUser = (searchTerm) => {
  return users.findAll({
    where: {
      $or: [
        {
          first_name: {
            $iLike: `%${searchTerm}%`
          }
        },
        {
          last_name: {
            $iLike: `%${searchTerm}%`
          }
        },
        {
          nickname: {
            $iLike: `%${searchTerm}%`
          }
        }
      ]
    }
  })
}

const createUserAuthentication = (userId, password) => {
  return userAuthentications.create({
    userId: userId,
    password: password
  })
}

const createUser = (req) => {
  return users.create({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    nickname: req.body.nickname
  })
    .then((user) => {
      if (!req.body.oauth) {
        return createUserAuthentication(user.id, req.body.password)
      }
    })
}
