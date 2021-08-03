const express= require("express");
const bodyParser =require('body-parser')
const mongoose =require('mongoose')
const {listBooksController, updateBookController, createBookController, deleteBooksController} = require('./controllers');
const server = express();
 
//middleware
server.use(bodyParser.json());






//routes

//create book -get method
server.get ('/book/:id?', listBooksController);
//create book - post method
server.post('/book', createBookController);
//update book - put method
//server.put('/book', updateBookController);
//delete book - delete method
//server.delete('/book', deleteBooksController);
  
//connecting to database and  start  server
mongoose.connect('mongodb+srv://codetrainReader:reader20@cluster0.ebfyc.mongodb.net/codetrain?retryWrites=true&w=majority',
{useNewUrlParser:true, useUnifiedTopology:true}
)
.then(result =>{
    server.listen(4000, ()=>console.log('server is ready'))
    }).catch(err =>console.log(err))