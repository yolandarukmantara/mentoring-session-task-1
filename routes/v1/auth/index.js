const routers = require('express').Router();

routers.get('/', (req, res)=>{
    res.send('v1 auth')
});

routers.post('/register', require('./register'));
routers.post('/login', require('./login'));


module.exports = routers