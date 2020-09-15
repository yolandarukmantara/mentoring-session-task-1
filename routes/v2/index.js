const routers = require('express').Router()
const user = require('./users')

routers.use('/users', (req, res, next) => {
    console.log('middelware index v2')
    next()
}, user)
routers.get('/', (req, res) =>{
    res.send('index v2')
})
routers.get("/profile", (req,res)=>{
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    });
});

module.exports = routers