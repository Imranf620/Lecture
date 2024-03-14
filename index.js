const express = require('express');
const mongoose = require('mongoose');
const user = require("./models/dataCreation")

const app = express();

app.use(express.json())


// Connect to MongoDB
try {
    mongoose.connect('mongodb://127.0.0.1:27017/myapppppp').then(() => console.log("Connected to mongoooo"));
} catch (err) {
    throw err
}

app.post("/",user.createUser)

app.get("/",user.getUsers)


app.get("/:id",user.getSingleUser)

app.delete("/:id",user.deleteUser)

// Define routes and middleware

app.listen(3300, () => {
    console.log(`Server is running on port 3300}`);
});