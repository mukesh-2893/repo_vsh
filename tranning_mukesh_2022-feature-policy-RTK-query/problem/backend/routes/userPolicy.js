var express = require('express');
var router = express.Router();
var app = express();

var up_controller = require("../controller/userPolicy")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
/* GET users listing. */
router.get("/", up_controller.getAllUserPolicy);

router.post("/add", up_controller.addPolicy);

router.put("/update/:upid", up_controller.updatePolicy);

router.delete("/delete/:id", up_controller.deletePolicy)

router.post("/claim.request", up_controller.claim)

module.exports = router;