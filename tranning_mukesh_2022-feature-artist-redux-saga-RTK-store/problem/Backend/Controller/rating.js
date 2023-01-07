var rating = require("../utils/rating");
var express = require("express");
var album = require("../utils/album");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllRatings = function (req, res) {
  res.send(rating);
};

exports.getUserRating = function (req, res) {
  let id = req.params.id;
  let result = [];

  result = album.map((al) => {
    Object.assign(al, { ratings: 0 });
    return al;
  });

  if (id != -1) {
    let alRating = rating.filter((el) => el.uid == id);

    result = result.map((el) => {
      alRating.map((rt) => {
        if (rt.id == el.id) {
          el.ratings = parseInt(rt.ratings) * 20;
        }
      });
      return el;
    });
  }
  res.send(result);
};

//=====================for rating percentage=================================
const percentage = () => {
  album.map((al) => {
    totalCount = al.star.reduce((prevValue, currValue) => {
      return prevValue + currValue.count;
    }, 0);
    al.star.map((str) => {
      str.per = (str.count * 100) / totalCount;
    });
  });
};

exports.updateRating = function (req, res) {
  const { uid, id, ratings } = req.body;
  var result = [];

  result = rating.filter((el) => el.uid == Number.parseInt(uid) && el.id == id);

  if (result.length == 0) {
    rating.push(req.body);

    album.map((al) => {
      if (al.id == id) {
        var newCount = al.star[ratings - 1].count + 1;
        al.star[ratings - 1].count = newCount;
        percentage();
      }
    });
  } else {
    rating.map((rt) => {
      if (rt.uid == uid && rt.id == id) {
        // console.log(rt);
        album.map((al) => {
          if (al.id == id) {
            al.star[rt.ratings - 1].count = al.star[rt.ratings - 1].count - 1;
            console.log(al.star[ratings - 1].count);

            var newCount = al.star[ratings - 1].count + 1;
            al.star[ratings - 1].count = newCount;
            console.log(al.star[ratings - 1].count);
            percentage();
          }
        });
        rt.ratings = ratings;
      }
    });
    res.send(rating);
  }
};
