
var policies = require("../utils/policies");
var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllPolicies = function (req, res) {
  console.log(policies);
  res.send(policies);
};

exports.addPolicy = function (req, res) {
  const policy = req.body;
  console.log(req.body);
  policies.push(policy);
  res.send(policies);
};

exports.updatePolicy = function (req, res) {
  var pid = req.params.pid;
  var index = policies.findIndex((policy) => {
    return policy.pid === Number.parseInt(pid);
  });
  policies[index].pid = req.body.pid;
  policies[index].name = req.body.name;
  policies[index].amount = req.body.amount;
  policies[index].limit = req.body.limit;
  console.log(index);
  res.send(policies);
};

exports.deletePolicy = function (req, res) {
  var id = req.params.id;
  // console.log("you are on right track");
  var index = policies.findIndex((policy) => {
    return policy.pid === Number.parseInt(id);
  });

  if (index >= 0) {
    policies.splice(index, 1);
    res.send(policies);
    // res.send("user deleted");
  } else {
    // console.log("user not found");
    res.send(policies);
    res.end();
  }
};
