const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");

const app = express();

// DB Config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("mongoDB connected..."))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
