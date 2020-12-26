
require('dotenv').config()
const jwt = require('jsonwebtoken')
const logins = (req , res , next) =>{
  const authorization = req.headers['authorization'];
  const token = authorization && authorization.split(' ')[1]
    if(token == null){
      return res.status(400).json({
        status : 400,
        message : "The Token is required"
      })
    }else{

      jwt.verify(token , process.env.SECRET_KEY , (err , payload) =>{

        if(err){
          return res.status(401).json({

            status : 401,
            message : err.message

          })
        }

          req.user = payload
          next()
        
      })
    }
}

module.exports = logins
