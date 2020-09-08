const express = require('express')
const app     = express()
const coba = require('./coba')
const routes = require('./routes') 

app.use('/coba', coba)
app.use(routes)
app.use(express.json());

const middleware1 = (req, res, next) =>{
    console.log('this is middleware 1')
    next()
}

const middleware2 = (req, _, next) =>{
    console.log('this is middleware 2')
    next()
}

const arrayMiddleware = [middleware1,middleware2]
app.get('/array-middleware', arrayMiddleware, (req,res)=>{
    res.send('array middleware')
})

app.get('/middleware1', (req,res, next) => {
    console.log('middleware 1')
    next()
}, (req, res) =>{
    res.send('test middleware 1')
})

app.post('/post', (req,res) => {
    console.log(req.body.name)
    res.json(req.body.name)
})
  
app.listen(3000, () => console.log('Listening at http://localhost:3000'))