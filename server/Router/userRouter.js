const { Router } = require("express");
const { signUp } = require("../Controller/userController");

const router = Router();

router.post("/signup", signUp); // Sign Up Route

module.exports = router;
