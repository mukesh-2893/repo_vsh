var users = require('../utils/users')
var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllUsers = function(req, res){
    // console.log(users);
    res.send(users)
}

exports.addUser = function(req, res){
    const user = req.body;
    console.log(req.body);
  users.push(user);
  res.send(users);
  
}

exports.updateUser = function(req, res){
    var uid = req.params.uid;
    var index = users.findIndex((user)=>{
      return (user.uid === Number.parseInt(uid));
    });
  users[index].uid = req.body.uid;
  users[index].name = req.body.name;
console.log(index);
  res.send(users);
}

exports.deleteUser = function(req, res){
    var id = req.params.id;
  // console.log("you are on right track");
  var index = users.findIndex((user)=>{
    return (user.uid === Number.parseInt(id));
  });

  if(index >= 0 ){
    var user = users[index];
    users.splice(index, 1);
    res.send(users);
    // res.send("user deleted");
  }else{
    // console.log("user not found");
    res.send(users);
    res.end();
  }
}