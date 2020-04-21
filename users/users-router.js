const router = require('express').Router();

const Users = require('./users-model.js');

const theAuthorizer = require('../auth/authorize-mw.js')

router.get('/', theAuthorizer, (req, res) => {
    Users.find()
      .then(users => {
          res.json(users)
      })
      .catch(error => res.send("Error with Token"))
})

module.exports = router;