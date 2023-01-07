var album = require("../utils/album")
var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllAlbum = function(req, res){
    res.send(album)
}

exports.addAlbum = function(req, res){
    const album1 = req.body;
    const { id, albumName, artistName, link } = album1;
    var newStar = [
      { count: 0, per: 0 },
      { count: 0, per: 0 },
      { count: 0, per: 0 },
      { count: 0, per: 0 },
      { count: 0, per: 0 },
    ];
    var obj = { id : id, albumName : albumName, artistName : artistName, link : link, star : newStar}
    album.push(obj);
  res.send(album);
}

exports.updateAlbum = function(req, res){
    var id = req.params.id;
    console.log(id);
    var index = album.findIndex((album)=>{
        return (album.id == Number.parseInt(id));
    });
    console.log(index);
    album[index].id = req.body.id;
    album[index].albumName = req.body.albumName;
    album[index].artistName = req.body.artistName;
console.log(index);
  res.send(album);
}

exports.deleteAlbum = function(req, res){
    var id = req.params.id;
  var index = album.findIndex((album)=>{
    return (album.id === Number.parseInt(id));
  });

  if(index >= 0 ){
    var artist = album[index];
    album.splice(index, 1);
    res.send(album);
    res.send("artist deleted");
  }else{
    // console.log("artist not found");
    res.send(album);
    res.end();
  }
}