let mongoose = require('mongoose');

//book model
const BookSchema = new mongoose.Schema({
title:String,
author:String,
type: String,
yearOfPublication:String,
description:String,
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel