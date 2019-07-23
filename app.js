const express = require("express");
const mongoose = require("mongoose");

const app = express();

//MAP GLOBAL PROMISE - get rid of warning when you run the server
mongoose.Promise = global.Promise;

//DB config
const db = require("./config/database");

//CONNECT TO MONGOOSE
mongoose
  .connect(db.mongoURI, {
    autoReconnect: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get((req,res), ()=>{
  res.send("me")
})

const port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log("Server running successfully");
});