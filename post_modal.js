const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema({
    author : String,
    location : String,
    image : String,
    likes: Number,
    date : String,
    description : String
})
const PostModal = new mongoose.model("posts", PostSchema)
module.exports = PostModal