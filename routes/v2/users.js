const routers = require('../v1/users')

const router = require('express').Router()

router.get('/', (req, res, next)=>{
    console.log('middleware user v2')
    next()
}, (req, res)=>{
    res.send('index user v2')
})

router.get('/ganjil/:id', (req, res, next) =>{
    const id = req.params.id
    if(id%2==1){
        console.log('ID Ganjil')
        next()
    }
    console.log('Bukan ID Ganjil')
}, (req, res) => {
    res.send('ID Ganjil')
})

module.exports = router