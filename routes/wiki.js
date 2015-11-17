var express = require('express');
var router = express.Router();
var models = require('../models/index.js');
var Page = models.Page;
var User = models.User;

router.get("/", function(req, res, next) {
  Page.find({}).exec()
    .then(function(pages) {
      //console.log(pages);
      res.render("index", { pages: pages });
    });
});

router.post("/", function(req, res, next) {
  var title = req.body.title;
  var content = req.body.content;
  var userProps = {name: req.body.name, email: req.body.email};

  var user = User.findOrCreate(userProps);
  // var status = req.body.status;
  // var author = req.body.author;
  var page = new Page({
    title: title,
    content: content,
    tags: req.body.tags
  });

  page.save()
    .then(function() {
      res.redirect(page.route);
    })
    .then(null, function(err) {
      console.error(err);
    });
});

router.get("/add", function(req, res, next) {
  var locals = { };
  res.render("addpage", locals);
});

router.get("/search",function(req,res,next){
  var tags = req.query.tags;
  // res.render("search")
  if(tags === ""||tags === undefined){
  res.render("search",{pages: ""});
  }else{
    console.log(tags);
    tags = tags.split(" ");
    Page.find({tags: {$in: tags}}).exec()
    .then(function(values){
      res.render("search",{pages: values});
    })
  }

})



router.get("/:urlTitle",function(req,res,next){
  Page.findOne({urlTitle: req.params.urlTitle}).exec()
    .then(function(value){
      res.render("wikipage",value);
      //console.log(value);
    })
    .then(null, function(err) {
      console.error(err);
    });
  
});

module.exports = router;