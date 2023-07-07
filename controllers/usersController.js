const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const Users = require("../models/userModel");

// @desc ragister user
// @route POST /api/users/ragister
// @access public
const ragisterUser = asyncHandler(async (req, res) => {
  const { userName, password, email, warehouse } = req.body;
  if (!userName || !password || !email || !warehouse) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log("Hashed pass : ", hashedPassword);
  //validate new user
  const isRagistered = await Users.findOne({ email });
  console.log("ragistered: ", isRagistered)

  if (isRagistered) {
    res.status(400);
    throw new Error("User already exist!");
  }
  const user = await Users.create({
    userName,
    password: hashedPassword,
    email,
    warehouse,
  });

  //temp
  // const user = {
  //   userName,
  //   password: hashedPassword,
  //   email,
  //   warehouse,
  // };

  if (user) {
    res
      .status(200)
      .json({ message: `User ragistered: ${JSON.stringify(user)}` });
  } else {
    throw new Error("Failed to ragister user.");
  }
});

// @desc ragister user
// @route POST /api/users/ragister
// @access public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }

  const user = Users.find({ email });
  // const user = {
  //   userName: "Ab",
  //   email: "ab@test.com",
  //   password: "123456",
  //   warehouse: "B1",
  // };
  if (user && bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      { user: user.userName, email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "5m" }
    );
    res.status(202).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Enter valid credetials!");
  }
};

// @desc get current user
// @route GET /api/users/current
// @access private
const currentUser = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = { ragisterUser, loginUser, currentUser };
