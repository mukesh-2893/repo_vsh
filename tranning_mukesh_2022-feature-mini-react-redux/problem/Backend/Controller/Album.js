var album = require("../utils/album");
var artists = require("../utils/artists");
var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllAlbum = function (req, res) {
  let result = album.map((e) => {
    artists.map((artist) => {
      if (artist.aid == e.aid) {
        e["artistName"] = artist.name;
      }
    });
    return e;
  });
  const arName = result.map((el) => {
    return { id: el.id, name: el.name, artistName: el.artistName };
  });

  res.send(arName);
};

exports.specificAlbum = function (req, res) {
  const { id } = req.params;
  const album = album.find((albumId) => {
    return albumId.id === parseInt(id);
  });
  if (album) res.send(album);
  else res.send(album);
};

exports.addAlbum = function (req, res) {
  const singleAlbum = req.body;
  const { id, albumName, artistName } = singleAlbum;
  const i = artists.findIndex((el) => {
    return el.name == artistName;
  });
  const obj = { id: id, name: albumName, aid: artists[i].aid };
  album.push(obj);

  res.send(singleAlbum);
};

exports.updateAlbum = function (req, res) {
  var id = req.params.id;
  var index = album.findIndex((e) => {
    return e.id === Number.parseInt(id);
  });
  console.log(req.body);
  const artistIndex = artists.findIndex((el)=>{
    return el.name == req.body.artistName;
  });
  album[index].aid = artists[artistIndex].aid;
  album[index].id = req.body.id;
  album[index].name = req.body.albumName;
  console.log(index);
  res.send(req.body);
};

exports.deleteAlbum = function (req, res) {
  var id = req.params.id;
  // console.log(id);
  // album = album.filter((e) => e.id !== Number.parseInt(id));

  const index = album.findIndex((e)=> {
    return e.id == Number.parseInt(id);
  })
  var sendObj = album[index];
  album.splice(index, 1);

  res.send(sendObj);
};
