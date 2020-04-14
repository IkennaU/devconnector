const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
// api
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

const app = express();
// bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

// connect to mongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch((err) => console.log(err));

// Initialise Passport
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);

// Use Routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

// Server Static Assets if in production

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server running on port ${port}`));
