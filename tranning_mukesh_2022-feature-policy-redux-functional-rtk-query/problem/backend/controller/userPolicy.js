var userPolicy = require("../utils/userPolicy");
var users = require("../utils/users");
var policy = require("../utils/policies");

var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllUserPolicy = function (req, res) {
  var result = [];
  result = userPolicy.map((up) => {
    users.map((u) => {
      if (up.uid == u.uid) {
        Object.assign(up, { userName: u.name });
      }
    });

    policy.map((p) => {
      if (up.pid == p.pid) {
        Object.assign(up, {
          policyName: p.name,
          amount: p.amount,
          limit: p.limit,
        });
      }
    });
    return up;
  });

  //   console.log(result);
  res.send(result);
};

exports.addPolicy = function (req, res) {
  userPolicy.push(req.body);
  // var userIndex = users.findIndex((i) => {
  //   return i.name == req.body.userName;
  // });
  // var uid = users[userIndex].uid;
  // var policyIndex = policy.findIndex((i) => {
  //   return i.name == req.body.policyName;
  // });
  // var pid = policy[policyIndex].pid;

  // var obj = { upid: req.body.upid, uid: uid, pid: pid };
  // userPolicy.push(obj);

  var result = [];
  result = userPolicy.map((up) => {
    var result = [];
    users.map((u) => {
      if (up.uid == u.uid) {
        Object.assign(up, { userName: u.name });
      }
    });

    policy.map((p) => {
      if (up.pid == p.pid) {
        Object.assign(up, {
          policyName: p.name,
          amount: p.amount,
          limit: p.limit,
        });
      }
    });
    return up;
  });

    console.log(result);
  res.send(result);

  

  // res.send(userPolicy)

};

exports.updatePolicy = function (req, res) {
  var upid = req.params.upid;
  var index = userPolicy.findIndex((up) => {
    return up.upid === Number.parseInt(upid);
  });

  var userIndex = users.findIndex((i) => {
    return i.name == req.body.userName;
  });
  var uid = users[userIndex].uid;
  var policyIndex = policy.findIndex((i) => {
    return i.name == req.body.policyName;
  });
  var pid = policy[policyIndex].pid;

  userPolicy[index].upid = req.body.upid;
  userPolicy[index].uid = uid;
  userPolicy[index].pid = pid;

  var result = [];
  result = userPolicy.map((up) => {
    var result = [];
    users.map((u) => {
      if (up.uid == u.uid) {
        Object.assign(up, { userName: u.name });
      }
    });

    policy.map((p) => {
      if (up.pid == p.pid) {
        Object.assign(up, {
          policyName: p.name,
          amount: p.amount,
          limit: p.limit,
        });
      }
    });
    return up;
  });

  //   console.log(result);
  res.send(result);
};

exports.deletePolicy = function (req, res) {
  var id = req.params.id;
  // console.log("you are on right track");
  var index = userPolicy.findIndex((policy) => {
    return policy.upid === Number.parseInt(id);
  });

  if (index >= 0) {
    userPolicy.splice(index, 1);

    var result = [];
    result = userPolicy.map((up) => {
      var result = [];
      users.map((u) => {
        if (up.uid == u.uid) {
          Object.assign(up, { userName: u.name });
        }
      });

      policy.map((p) => {
        if (up.pid == p.pid) {
          Object.assign(up, {
            policyName: p.name,
            amount: p.amount,
            limit: p.limit,
          });
        }
      });
      return up;
    });

    //   console.log(result);
    res.send(result);
  } else {
    var result = [];
    result = userPolicy.map((up) => {
      var result = [];
      users.map((u) => {
        if (up.uid == u.uid) {
          Object.assign(up, { userName: u.name });
        }
      });

      policy.map((p) => {
        if (up.pid == p.pid) {
          Object.assign(up, {
            policyName: p.name,
            amount: p.amount,
            limit: p.limit,
          });
        }
      });
      return up;
    });

    //   console.log(result);
    res.send(result);
    res.end();
  }
};

exports.claim = function (req, res) {
  var index = userPolicy.findIndex((i) => {
    return i.upid == req.body.upid;
  });

  userPolicy[index].status = req.body.status;
  userPolicy[index].camount = req.body.camount;

  var result = [];
  result = userPolicy.map((up) => {
    var result = [];
    users.map((u) => {
      if (up.uid == u.uid) {
        Object.assign(up, { userName: u.name });
      }
    });

    policy.map((p) => {
      if (up.pid == p.pid) {
        Object.assign(up, {
          policyName: p.name,
          amount: p.amount,
          limit: p.limit,
        });
      }
    });
    return up;
  });

  //   console.log(result);
  res.send(result);
};
