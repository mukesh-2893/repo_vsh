var posts = require("../utils/posts");
var users = require("../utils/users");
var express = require("express");

var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

exports.getAllPosts = function (req, res) {
  var result = [];
  result = posts.map((p) => {
    users.map((u) => {
      if (p.uid === u.uid) {
        Object.assign(p, { userName: u.name });
      }
    });
    return p;
  });
  res.send(result);
};

exports.addPost = function (req, res) {
  posts.push(req.body);
  var result = [];
  result = posts.map((p) => {
    users.map((u) => {
      if (p.uid === u.uid) {
        Object.assign(p, { userName: u.name });
      }
    });
    return p;
  });
  res.send(result);
};

exports.updatePost = function (req, res) {
  var pid = req.params.pid;
  var index = posts.findIndex((post) => {
    return post.pid === Number.parseInt(pid);
  });
  posts[index].pid = req.body.pid;
  posts[index].uid = req.body.uid;
  posts[index].title = req.body.title;
  posts[index].post = req.body.post;

  var result = [];
  result = posts.map((p) => {
    users.map((u) => {
      if (p.uid === u.uid) {
        Object.assign(p, { userName: u.name });
      }
    });
    return p;
  });
  res.send(result);
};

exports.deletePost = function (req, res) {
  var id = req.params.id;
  var index = posts.findIndex((post) => {
    return post.pid === Number.parseInt(id);
  });

  if (index >= 0) {
    var user = posts[index];
    posts.splice(index, 1);

    var result = [];
    result = posts.map((p) => {
      users.map((u) => {
        if (p.uid === u.uid) {
          Object.assign(p, { userName: u.name });
        }
      });
      return p;
    });
    res.send(result);
  } else {
    res.send(posts);
    res.end();
  }
};

exports.likePost = function (req, res) {
  var i = posts.findIndex((e) => {
    return e.pid === req.body.pid;
  });
  posts[i].likes.push(req.body.uid);
  console.log(posts);
  var result = [];
  result = posts.map((p) => {
    users.map((u) => {
      if (p.uid === u.uid) {
        Object.assign(p, { userName: u.name });
      }
    });
    return p;
  });
  res.send(result);
};
