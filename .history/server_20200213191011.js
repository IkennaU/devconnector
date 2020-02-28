const express = require("express");
const mongoose = require("mongoose");

const app = express();

// DB CONFIG
const db = require("./config/keys").mongoURI;

app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));