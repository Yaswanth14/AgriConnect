const { Router } = require("express");
const { postContent } = require("../Controller/postController");
const userMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/post", userMiddleware, postContent);

module.exports = router;
