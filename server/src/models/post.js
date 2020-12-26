const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const postSchema = new mongoose.Schema({
    title : {
        type :String,
        required : true
    },
    body : {
        type : String,
        required :true
    },
    photo : {
        type : String,
        default : "No Photo"
    },
    postBy: {
        type : ObjectId,
        ref : "instagram"
    }
})

const posts = mongoose.model("post" , postSchema);
module.exports = posts