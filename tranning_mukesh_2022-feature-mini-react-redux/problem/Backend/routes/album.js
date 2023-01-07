var express = require('express');
var router = express.Router();
var app = express();

var album_controller = require("../controller/album")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET album listing. */
router.get("/", album_controller.getAllAlbum);

router.post("/add", album_controller.addAlbum);

router.get("/:id", album_controller.specificAlbum);

router.put("/update/:id", album_controller.updateAlbum);

router.delete("/delete/:id", album_controller.deleteAlbum);




module.exports = router;