var express = require('express');
var router = express.Router();
var app = express();


var album_controller = require("../controller/Album")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", album_controller.getAllAlbum);

router.post("/add", album_controller.addAlbum);

router.put("/update/:id", album_controller.updateAlbum);

router.delete("/delete/:id", album_controller.deleteAlbum)




module.exports = router;