'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    judul: {
        type: String,
        required: true
    },
    detail:{
        type: String,
        required: true
    }
})

const Article= mongoose.model('Article', articleSchema);
module.exports=Article;
