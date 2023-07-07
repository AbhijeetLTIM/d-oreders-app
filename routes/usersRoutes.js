const express  = require("express")
const router = express.Router()

const {ragisterUser, loginUser, currentUser} = require("../controllers/usersController")
const validateToken = require("../middleware/authHandler")

router.route('/ragister').post(ragisterUser)

router.route('/login').post(loginUser)

router.get('/current', validateToken, currentUser)

module.exports = router