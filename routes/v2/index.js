const routers = require('express').Router()
const user = require('./users')

routers.use('/users', (req, res, next) => {
    console.log('middelware index v2')
    next()
}, user)
routers.get('/', (req, res) =>{
    res.send('index v2')
})

module.exports = routers