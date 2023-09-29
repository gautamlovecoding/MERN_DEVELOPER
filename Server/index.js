const { config } = require('dotenv')
config();
const express = require("express");
const mongoose = require("mongoose")
// const createTodo = require("./routes/todoRoute");
const app = express();
app.use(express.json())


mongoose
    .connect(process.env.CONNECTION_STRING)
    .then(() => {
        console.log("mongodb connected");
    })
    .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
    console.log(`server running on PORT ${process.env.PORT}`);
})