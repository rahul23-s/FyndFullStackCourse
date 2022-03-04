const express = require("express");
const app = express();
const userRouter = require("../");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const dbURL =
  "mongodb+srv://rahul-23s:xou96VyfmHifLXq7@cluster0.zhgal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//Connecting with Mongodb
mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB is connected!");
  })
  .catch((error) => {
    console.log(error);
  });

//configuring body parser (Accepts the body values from req and parses it)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configure morgan (Logger)
app.use(morgan("dev"));

app.get("/", (req, res, next) => {
  res.json("This is working on / request!");
});

app.use("/users", userRouter);

module.exports = app;
