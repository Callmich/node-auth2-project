const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets.js');

const Users = require('../users/users-model.js');

//CRUDs go here


module.exports = router;