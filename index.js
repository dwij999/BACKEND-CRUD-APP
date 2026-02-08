const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route")
const Product = require("./models/product.model");
const { deleteRecordById } = require("./controller/product.controller");
const app = express();

//to send json file as request
app.use(express.json());
//to send data using form
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
     res.send("welcome to node js this is '/' res  now using nodemon")
});

//get data from id
app.use("/api/products/get", productRoute);


mongoose.connect("mongodb://127.0.0.1:27017")
     .then(() => {
          console.log("✅ Connected to MongoDB jaah moj kar ");
          app.listen(3000, () => {
               console.log("running at server 3000");
          });
     })
     .catch(err => console.error("❌ Connection failed ", err.message));
