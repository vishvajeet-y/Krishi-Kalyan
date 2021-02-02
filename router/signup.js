const express=require('express')
const router=new express.Router()
const User=require('../model/farmer')/*Loading user model */

router.get('/register',async(req,res)=>{
    res.render('register')
})

router.post('/register',async(req,res)=>{
     const user=new User(req.body)
     try{
      await user.save()
       const token=await user.generateAuthToken()  
       res.cookie('jwt', token)
     //  console.log(`this is awesome ${req.cookies.jwt}`)

     
       res.redirect('/kishan')
     }
     catch(e){
         console.log(e)
       res.redirect('/register')
     }
     
})

module.exports=router