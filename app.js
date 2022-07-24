const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors");
const PostModal = require("./post_modal");
app.use(cors());
app.use(express.json({limit:"30mb", extended: true}));

app.listen(process.env.PORT || 3005, (err) => {
  if (!err) {
    console.log("Server started at port 3005")
  } else {
    console.log(err);
  }
});

const url = "mongodb+srv://test:test9869@cluster0.nbesk.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url, (data) => {
  console.log("Successfully connected to db");
}, (err) => {
  console.log(err)
});
app.get('/image', (req, res) => {
  console.log("Backend");
  PostModal.find().then((post)=>{
    res.status(200).send(post)
  }).catch((err)=>{
    res.status(400).send(err)
  })
})
app.post("/add", (req, res) => {
  console.log(req.body);
  const date = new Date()
  let today = date + ""
  today = today.split(" ");
  today = today.splice(1, 3).join(" ");
  console.log(today);
      PostModal.create({
        author: req.body.author,
        location: req.body.location,
        image: req.body.image,
        likes: 0,
        date: today,
        description: req.body.description
      }).then((post)=>{
        res.status(200).send(post);
        console.log(post)
      }).catch((err)=>{
        res.status(400).send(err);
      })
  })