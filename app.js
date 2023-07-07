const express = require('express')
const dotenv = require("dotenv").config()
const errorhandler = require("./middleware/errorHandler");
const connectDb = require('./config/dbConnection');

connectDb()       //to connect to db
const app = express();

const port = process.env.PORT ||  5000;

app.use(express.json())   //to parse req body
app.use("/api/dOrders", require("./routes/dOrdersRoutes"))  //router
app.use("/api/users", require("./routes/usersRoutes"))  //router

app.use(errorhandler)

app.listen(port, () => {
    console.log('app is running on port :', port)
})