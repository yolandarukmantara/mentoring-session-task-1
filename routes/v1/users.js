const routers = require('express').Router()

routers.get('/', (req, res)=> {
    res.send('user index')
})

routers.get('/:id', (req,res)=>{
    res.send('user detail : '+req.params.id)
})

module.exports = routers