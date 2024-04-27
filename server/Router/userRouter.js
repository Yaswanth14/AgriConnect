const { Router } = require("express");
const { signUp, signIn } = require("../Controller/userController");
const userMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/signup", signUp); // Sign Up Route
router.post("/signin", signIn); //Sign In Route

router.get("/user-auth", userMiddleware, (req, res) => {
  res.status(200).send({
    ok: true,
    success: true,
    message: "You are Authorized",
  });
});

module.exports = router;
