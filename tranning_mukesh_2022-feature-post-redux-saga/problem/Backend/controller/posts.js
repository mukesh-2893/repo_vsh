var posts = require('../utils/posts')
var express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

exports.getAllPosts = function(req, res){
    res.send(posts)
}

exports.addPost = function(req, res){
    
  posts.push(req.body);
  res.send(posts);
  
}

exports.updatePost = function(req, res){
    var pid = req.params.pid;
    var index = posts.findIndex((post)=>{
      return (post.pid === Number.parseInt(pid));
    });
    posts[index].pid = req.body.pid;
    posts[index].uid = req.body.uid;
    posts[index].title = req.body.title;
    posts[index].post = req.body.post;
  res.send(posts);
}

exports.deletePost = function(req, res){
    var id = req.params.id;
  var index = posts.findIndex((post)=>{
    return (post.pid === Number.parseInt(id));
  });

  if(index >= 0 ){
    var user = posts[index];
    posts.splice(index, 1);
    res.send(posts);
  }else{
    res.send(posts);
    res.end();
  }
}

exports.likePost = function(req, res){
  var i = posts.findIndex((e)=>{
    return e.pid === req.body.pid;
  });
  posts[i].likes.push(req.body.uid);
console.log(posts);
  res.send(posts)
}

