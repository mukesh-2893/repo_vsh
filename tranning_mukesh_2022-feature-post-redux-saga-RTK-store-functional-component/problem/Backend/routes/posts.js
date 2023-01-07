var express = require("express");
var router = express.Router();
var app = express();
var post_controller = require("../controller/posts");

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", post_controller.getAllPosts);

router.post("/add", post_controller.addPost);

router.put("/update/:pid", post_controller.updatePost);

router.delete("/delete/:id", post_controller.deletePost);

router.post("/like", post_controller.likePost);

module.exports = router;
