const express = require('express');
const connectDB = require('./DB/connection');
const { userRouter, messageRouter, authRouter } = require('./modules/index.router');
const app = express();
require('dotenv').config()
app.use(express.json())

port = process.env.PORT

app.use(authRouter ,userRouter,
    messageRouter)


connectDB()



app.listen(port, () => {
    console.log(`running on port.....${port}`);
})