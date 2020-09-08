var express = require('express')
var router  = express.Router()

router.get('/', (req,res)=>{
    res.send('coba index')
})

module.exports = router