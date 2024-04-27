const { User } = require("../Model/userModel");

const { comparePassword, hashPassword } = require("./../helpers/authHelper.js");

module.exports.signUp = async (req, res) => {
  try {
    const { name, username, email, password, location, language } = req.body;
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (existingUser)
      return res.send({ success: false, message: "User already exists" });

    const hashedPassword = await hashPassword(password);
    const user = await new User({
      name,
      username,
      email,
      location,
      language,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registeration",
      error,
    });
  }
};
