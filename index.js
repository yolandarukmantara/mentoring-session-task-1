const express = require('express')
const users = require("./routes/v1/users");
const app     = express()
const coba = require('./coba')
const routes = require('./routes') 
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const passport = require("passport")
const db = require("./config/key").mongoURI;

//CONNECT TO DB
mongoose.
    connect("mongodb://localhost:27017/acmedb", { useNewUrlParser: true})
    .then(()=> {
        console.log("DB Connected")
    })
    .catch(err => console.log(err))


app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/v1/users",users);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
console.log(`Server running on PORT:${PORT}`)); 

// app.use('/coba', coba)
app.use(routes)
// app.use(express.json());

// const middleware1 = (req, res, next) =>{
//     console.log('this is middleware 1')
//     next()
// }

// const middleware2 = (req, _, next) =>{
//     console.log('this is middleware 2')
//     next()
// }

// const arrayMiddleware = [middleware1,middleware2]
// app.get('/array-middleware', arrayMiddleware, (req,res)=>{
//     res.send('array middleware')
// })

// app.get('/middleware1', (req,res, next) => {
//     console.log('middleware 1')
//     next()
// }, (req, res) =>{
//     res.send('test middleware 1')
// })

// app.post('/post', (req,res) => {
//     console.log(req.body.name)
//     res.json(req.body.name)
// })
  
// app.listen(3000, () => console.log('Listening at http://localhost:3000'))