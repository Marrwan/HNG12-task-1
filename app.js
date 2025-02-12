const createError = require('http-errors');
const express = require('express');
const cors = require("cors");
const logger = require('morgan');

const app = express();

app.use(cors({
    origin: '*',
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res) => {
  const response = {
    email: "abdulbasitdamilola6@gmail.com", 
    current_datetime: (new Date()).toISOString(), 
    github_url: "https://github.com/Marrwan/HNG12-task-1" 
  };

  res.status(200).json(response);
});
app.use(function(req, res, next) {
  res.statusCode = 404
  res.send("PAGE NOT FOUND")
});

module.exports = app;
