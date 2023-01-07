var express = require('express');
var router = express.Router();
var app = express();

var policy_controller = require('../controller/policies')

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

router.get("/", policy_controller.getAllPolicies);

router.post("/add", policy_controller.addPolicy);

router.put("/update/:pid", policy_controller.updatePolicy);

router.delete("/delete/:id", policy_controller.deletePolicy)




module.exports = router;