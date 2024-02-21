const router = require("express").Router();

const { getAllUsers, getUsersByUuid, searchUserByQuery } = require("../Controllers/user.controller");
const { validateSearchQuery } = require("../Middlewares/Validators/userValidator");

router.get("/", getAllUsers);
router.get("/search", validateSearchQuery, searchUserByQuery);
router.get("/:uuid", getUsersByUuid);

module.exports = router;