const routers = require('express').Router()
const users   = require('./users')
const passport = require('passport');

routers.use('/auth', require('./auth'));
routers.use('/users', users);

routers.get('/', (req, res)=>{
    res.send('v1')
})

module.exports = routers