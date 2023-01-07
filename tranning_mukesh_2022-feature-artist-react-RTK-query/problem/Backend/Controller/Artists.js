var artists = require("../utils/artists")
var express = require("express");

var app = express();
//middleware to pass json
app.use(express.json());

//to handle url encoded data we use below line
app.use(express.urlencoded({ extended: false }));

exports.getAllArtists = function(req, res){
    res.send(artists)
}

exports.specificArtist = function(req, res){
    const { id } = req.params;
  const artist = artists.find((artistId) => {return (artistId.aid === parseInt(id))});
  if (artist) res.send(artist);
  else res.send(artist);
}

exports.addArtist = function(req, res){
    const artist = req.body;
  artists.push(artist);
  res.send(artists);
}

exports.updateArtist = function(req, res){
    var id = req.params.uid;
    var index = artists.findIndex((artist)=>{
      return (artist.aid === Number.parseInt(id));
    });
  artists[index].uid = req.body.uid;
  artists[index].name = req.body.name;
console.log(index);
  res.send(artists);
}

exports.deleteArtist = function(req, res){
    var id = req.params.id;
  // console.log("you are on right track");
  var index = artists.findIndex((artist)=>{
    return (artist.aid === Number.parseInt(id));
  });

  if(index >= 0 ){
    var artist = artists[index];
    artists.splice(index, 1);
    res.send(artists);
    res.send("artist deleted");
  }else{
    // console.log("artist not found");
    res.send(artists);
    res.end();
  }
}