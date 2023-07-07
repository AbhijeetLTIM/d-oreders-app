const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv")

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    console.log("TOKEN",token)
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        // console.log("Error ", err.message);
        res.status(401);
        throw new Error("Authorization failed!");
      }
      console.log("Decoded user", decoded);
      req.user = decoded.user;
      next();
    });
  } else {
    res.status(401);
    throw new Error("Unauthorized user!");
  }
});

module.exports = validateToken;
