const { Router } = require("express");
const { signUp, signIn } = require("../Controller/userController");

const router = Router();

router.post("/signup", signUp); // Sign Up Route
router.post("/signin", signIn); //Sign In Route

module.exports = router;
