var express = require('express');
var router = express.Router();
var app = express();

var users = require("../utils/users");
var rating_controller = require("../controller/rating")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", rating_controller.getAllRatings);

router.get("/userRating/:id", rating_controller.getUserRating);

router.post("/update.ratings", rating_controller.updateRating);

module.exports = router;