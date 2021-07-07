let booksDb = require('./database');

//book model
class BookModel{
    constructor({title, author, type, yearOfPublication, description}){
        this.title =title;
        this.author = author;
        this.type = type;
        this.yearOfPublication = yearOfPublication;
        this.description = description;
        

    }
    save(){
        booksDb.push(this)
        return this;
    }
    static all(){
        return booksDb
    }

    static update(updatedInfo ={} ){
      booksDb =  booksDb.map(book =>{
            if(book.name === updatedInfo.name){
                return {...book, ...updatedInfo}
            }
            return book; 
        }); 
    }
    static delete({name}){
        let deletedbook = null;
        booksDb= booksDb.filter( book =>{
             if(book.name !== name){
                 return true;
             }
             deletedbook= book;

             return false;
         });
         return deletedbook;
    }

}
module.exports = BookModel