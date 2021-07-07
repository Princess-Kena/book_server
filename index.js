const express= require("express");
const bodyParser =require('body-parser')
const {listBooksController, updateBookController, createBookController, deleteBooksController} = require('./controllers');
const server = express();
 
//middleware
server.use(bodyParser.json());






//routes

//create book -get method
server.get ('/book', listBooksController);
//create book - post method
server.post('/book', createBookController);
//update book - put method
server.put('/book', updateBookController);
//delete book - delete method
server.delete('/book', deleteBooksController);
  
server.listen(4000, ()=>console.log('server is ready'))