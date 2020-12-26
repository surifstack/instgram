const express = require('express')
const router = new express.Router();
const postModel = require('../models/post')

router.use(express.json());

const loginrequired = require('../middleware/requireLogin')

router.post("/post" , loginrequired, async (req , res) =>{

const {title , body  } = req.body


if(!title || !body){
   return  res.status(422).json({
        error : "Please Add all the fiels"
    })
 
}

const post =  new postModel({

    title : title,
    body: body,
    postBy : req.user

})

const save = await post.save();
if(save){
    res.status(200).json({
        status : 200,
        message : "Post Add Succesfully",
        data  : req.user
    })
}else{
    res.status(400).json({
        status : 400,
        message : "Post Not Add"
    })

}
})

router.post("/posts" ,loginrequired ,async (req , res) =>{
    try{
      const {id} = req.body;
      const post = await postModel.find({postBy : id});

      if(post){
          res.status(200).json({
              status : 200,
              message : 'The Post Find Succesfully',
              posts : post
          })
      }
  
    }catch(err){

        res.status(400).json({
            statsu : 400,
            message : 'You are not authorized'
        })
    }
})

module.exports = router