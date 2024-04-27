const { Post } = require("../Model/postModel");
const { User } = require("../Model/userModel");

module.exports.postContent = async (req, res) => {
  try {
    const { link, message, type } = req.body;
    const post = new Post({ link, type, message });
    await post.save();
    await User.findOneAndUpdate(
      { email: req.email },
      {
        $push: {
          posts: post._id,
        },
      }
    );

    res.status(200).send({
      success: true,
      message: "Post updated successfully",
      post,
    });
  } catch (error) {
    console.log("Error in posting content", error);
    res.status(500).send({
      success: false,
      message: "Couldn't post the image",
    });
  }
};

module.exports.getPosts = async (req, res) => {
  try {
    let posts = await Post.find({});
    res.status(200).send({
      success: true,
      messagee: "All posts fetched successfully!",
      posts,
    });
  } catch (error) {
    console.log("Error in posting content", error);
    res.status(500).send({
      success: false,
      message: "Couldn't post the image",
    });
  }
};
