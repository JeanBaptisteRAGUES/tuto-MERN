const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require('./models/Users');
const cors = require("cors");
const PORT = 3001;
const CLUSTER_ADRESS = "mongodb+srv://jbragues31:Megalodon31@cluster0.mi30y.mongodb.net/tuto-MERN_db?retryWrites=true&w=majority";

app.use(express.json());
app.use(cors());

mongoose.connect(CLUSTER_ADRESS);

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if(err) {
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});

app.listen(PORT, () => {
    console.log("SERVER RUNS PERFECTLY !");
});