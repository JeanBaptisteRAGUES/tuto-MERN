const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3001;
const CLUSTER_ADRESS = "mongodb+srv://jbragues31:Megalodon31@cluster0.mi30y.mongodb.net/tuto-MERN_db?retryWrites=true&w=majority";

mongoose.connect(CLUSTER_ADRESS);

app.listen(PORT, () => {
    console.log("SERVER RUNS PERFECTLY !");
});