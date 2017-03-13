const followers = require('../models').followers

module.exports = {
  create (req, res) {
    followers.sync()
      .then(() => {
        return followers.create({
          userId: req.params.userid,
          followerId: req.body.followerid
        })
      })
      .then(follower => {
        res.status(201).send(follower)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },
  getFollowers (req, res) {
    return followers.findAll({
      where: {
        'userId': req.params.userid
      }
    })
      .then(followers => {
        res.status(201).send(followers)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  },

  getFollowing (req, res) {
    return followers.findAll({
      where: {
        'followerId': req.params.userid
      }
    })
      .then(followers => {
        res.status(201).send(followers)
      })
      .catch(error => {
        res.status(400).send(error)
      })
  }
}
