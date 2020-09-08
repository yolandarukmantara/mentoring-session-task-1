const express = require('express')
const router  = express.Router()
const v1      = require('./v1')
const v2      = require('./v2')

router.use('/v1', v1)
router.use('/v2', (req,_,next)=>{
    console.log('middleware route index')
    next()
}, v2)

router.get('/', (req,res)=>{
    res.send('routes')
})

module.exports = router