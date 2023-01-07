var express = require("express");
var router = express.Router();
var app = express();
var user_controller = require("../controller/users");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", user_controller.getAllUsers);

router.post("/add", user_controller.addUser);

router.put("/update/:uid", user_controller.updateUser);

router.delete("/delete/:id", user_controller.deleteUser);

module.exports = router;
