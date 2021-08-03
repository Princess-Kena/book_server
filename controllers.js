const BookModel = require('./model')
//controllers
const listBooksController =(req, res) =>{
    // list all books
    const {id} = req.params;
    if(id){
        BookModel.find({author: id}).then(books =>{
            res.json({data:books});
        }).catch(err => console.log(err));
    } else {
       BookModel.find().then(books =>{
        res.json({data:books});
    }).catch(err => console.log(err));
    }

    }
    

const createBookController = (req, res) =>{
    //create all books
    const {title, author, type, yearOfPublication, description} = req.body;
    const book = new BookModel({title, author, type, yearOfPublication, description});
     
    book.save().then(result =>{
        res.json({message: "create successful", data:result});
    }).catch(error =>console.log(error)); 
}
/*const updateBookController =(req, res) =>{
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
}*/

module.exports ={
    listBooksController,
    //updateBookController,
    createBookController,
    //deleteBooksController,
}