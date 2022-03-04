const express = require("express");
const router = express.Router();

const { create_user, get_all_users } = require("../controllers/user");

//create user
router.post("/", create_user);

//get All Users
router.get("/", get_all_users);

// router.post("/post", (req, res, next) => {
//   res.json({ users: users });
// });

module.exports = router;
