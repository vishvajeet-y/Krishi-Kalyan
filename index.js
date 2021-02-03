require('./db/mongoose')
const express=require('express')
const app =express()
var cookieParser = require('cookie-parser')
const bodyParser=require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())/*This is used to automatically parse json data */
app.use(cookieParser())
const signupRouter=require('./router/signup')
 const loginRouter=require('./router/login')
const updateRouter=require('./router/update')
const kishanRouter=require('./router/kishan')
const ejs=require('ejs')
app.set('view engine','ejs')
app.use(kishanRouter)
app.use(signupRouter)
 app.use(loginRouter)
app.use(updateRouter)
app.listen('3000',()=>{
    console.log('it is connected at 3000')
})
