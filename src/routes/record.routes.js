const router = require("express").Router();

const auth = require("../middlewares/auth.middleware");
const role = require("../middlewares/role.middleware");

const controller = require("../controllers/record.controller");

router.post("/", auth, role("ADMIN"), controller.createRecord);
router.get("/", auth, controller.getRecords);

module.exports = router;