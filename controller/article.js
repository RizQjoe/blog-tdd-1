'use strict'

const Article = require('../model/Article');


//create
 function createArticle (req,res){
    Article.create({
        judul: req.body.judul,
        detail: req.body.detail,
        author: req.body.author
    })
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
};

//get all 
function getAllArticle(req,res) {
    Article.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
};

//get one article
function getOneArticle(req, res) {
  Article.findById(req.params.id)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};


//delete
function deleteArticle(req, res) {
  Article.deleteOne({
    _id: req.params.id
  })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};



//update
function updateArticle(req, res) {
  Article.where({
    _id: req.params.id
  })
    .update({
      judul: req.body.judul
    })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
};

module.exports ={ createArticle,getAllArticle,getOneArticle,deleteArticle,updateArticle }