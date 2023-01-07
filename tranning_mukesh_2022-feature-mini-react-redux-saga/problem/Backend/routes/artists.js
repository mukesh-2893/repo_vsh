var express = require('express');
var router = express.Router();
var app = express();


var artist_controller = require("../controller/Artists")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", artist_controller.getAllArtists);

router.post("/add", artist_controller.addArtist);

router.get("/:id", artist_controller.specificArtist);

router.put("/update/:uid", artist_controller.updateArtist);

router.delete("/delete/:id", artist_controller.deleteArtist)




module.exports = router;
