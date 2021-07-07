const BookModel = require('./model')
//controllers
const listBooksController =(req, res) =>{
    // list all books
    const books = BookModel.all();  
    res.json({data:books })
}
const createBookController = (req, res) =>{
    //create all books
    const {title, author, type, yearOfPublication, description} = req.body;
    const book = new BookModel({title, author, type, yearOfPublication, description});
     
    book.save(); 
    res.json({message: "create successful", data:book});
}
const updateBookController =(req, res) =>{
    //update all books
    const {title, author, type, yearOfPublication, description} = req.body;
  const updatedBook=  BookModel.update({title, author, type, yearOfPublication, description});
  res.json({message: "update successful", data: updatedBook});
}
const deleteBooksController =(req, res)=>{
    //delete all books
    const {name} = req.body;
    const deletedbook = BookModel.delete({name });
    res.json({message: "book deleted", data: deletedbook})
}

module.exports ={
    listBooksController,
    updateBookController,
    createBookController,
    deleteBooksController,
}