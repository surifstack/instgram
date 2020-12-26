require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const schema = new mongoose.Schema({

    name : {

        type : String,
        required : true
    },
    email : {

        type : String,
        required : true
    },
    phone : {

        type : Number,
        required : true

    },
    password : {

        type : String,
        required : true
    },
    tokens : 
        [
          {
              token : {

                type :String,
                required : true
              }
          }
        ]
    


});
// schema.methods.generateToken  = async function(){

//     try{
//         const token = jwt.sign({_id : this._id.toString()} , process.env.SECRET_KEY);
//         this.tokens = this.tokens.concat({token : token});
//         await this.save();
//         return token
//     }catch(err){
//         res.send(err);

//         console.log(err);

//     }
// }

schema.pre("save" , async function (next){

    if(this.isModified('password')){

        this.password = await bcrypt.hash(this.password , 10);
 
    }
    next();

})




const model = new mongoose.model("instagram" , schema);

module.exports = model;