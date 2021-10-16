const express = require("express");
const mongoose = require("mongoose");
const app = express();

//DB Config
const db = require("./config/keys").mongoURI;

// connection via mongoose
mongoose
    .connect(db)
    .then(() => console.log("Mongo DB Connected"))
    .catch(() => console.log("Error"));
app.get("/", (req, res) => res.send("Helllo!"));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`The server running on ${port}`);
});
