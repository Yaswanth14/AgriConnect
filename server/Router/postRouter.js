const { Router } = require("express");
const { postContent, getPosts } = require("../Controller/postController");
const userMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.post("/post", userMiddleware, postContent);
router.get("/posts", getPosts);

module.exports = router;
