var __dirname = "D:/Node JS Project/tutorial_1"
const express = require('express');
const bodyParser= require('body-parser')
//i want call connection from connection.js
const connection = require('./connection')
const MongoClient = require('mongodb').MongoClient
const app = express();
var db;
var test;
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.listen(3000, function() {
  console.log('listening on 3000');
})

//inline connection
MongoClient.connect('mongodb://jaisanas2:islamislam@ds033126.mlab.com:33126/jaisanas_test', (err, database) => {
  // ... start the server
 if (err) return console.log(err)
    db = database
})


//after i called connection i want to initiliaze db using connect function
// connection.connect(function(callback) {
//   callback(test);
// })

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {quotes: result})
  })
})
console.log("ulalala hahaha");