const routers = require('express').Router()
const users   = require('./users')

routers.use('/users', users)

routers.get('/', (req, res)=>{
    res.send('v1')
})

module.exports = routers