
const secrets = require('../api/secrets.js')
const jwt = require('jsonwebtoken');

module.exports = {
    generateToken
}

function generateToken(user){
    const payload = {
        userId: user.id,
        username: user.username,
        department: user.department
    };

    const secret = secrets.jwSecret;

    const options = {
        expiresIn: 1000 * 30
    }

    return jwt.sign(payload, secret, options)
}