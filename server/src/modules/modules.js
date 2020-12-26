const express = require('express')
const bcrypt = require("bcryptjs");
const model = require('../models/models')
const {body , validationResult} = require('express-validator')
const jwt = require('jsonwebtoken');
const router = new express.Router();



const requireLogin = require('../middleware/requireLogin')


router.use(express.json());

router.get('/demos' , requireLogin, (req , res) =>{
  res.send('the demo');
})

router.post("/signup" , requireLogin,async (req , res) =>{

   try{

    const {name , email ,phone , password} = req.body

   // const pass = await bcrypt.hash(password , 10);

      if(!name || !email || !password){
          res.status(400).json({

            'status' : 400,
            'message' : 'Sorry The All Fiels is required'
          })
      }else{

        
        
       const user = new model({

        name : name,
        email : email,
        password : password,
        phone: phone
       })
      // const token = await  user.generateToken();
      
       const save =  await  user.save();

       if(!save){
        res.status(400).json({

            'status' : 400,
            'message' : 'User Not add'
          })
       }else{
        res.status(200).json({

            'status' : 200,
            'message' : 'User add Succesfully'
          })
        
       }
      }

   }catch(err){

     res.status(500).json({
         status : 500,
         message : "Server Error"
     })
   }
})

router.get("/pro" ,  (req , res) =>{

  res.json({message : 'The Login USer'})
})

router.post("/login" ,async  (req , res ) =>{

try{

  const {email , password} = req.body
  if(!email || !password){

    res.status(400).json({
      status : 400,
      message : 'Email and pasword not match'
    })
  }else{

    const user = await model.findOne({email : email});


    if(!user){

       res.status(404).json({
        status : 404,
        message : 'The Login Creditona not match'
      })
    }else{
      const pass = await bcrypt.compare(password , user.password);

  
      
      const users = { _id : user._id}
  
      const token = await jwt.sign(users , process.env.SECRET_KEY);

      if(pass){
       
     res.status(200).json({
          status : 200,
          message : 'Your Are Login',
          token : token
        })

       
      }else{

       return  res.status(400).json({

          status : 400,
          message : 'Your Are not Login',
          
         })
      }
    }
  }

}catch(err){

}
})


module.exports = router;