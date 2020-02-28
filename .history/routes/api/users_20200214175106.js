const express = require("express");
const router = express.Router();

// Load User Model
const User = require("../../models/User");

//  @route  GET api/users/test
//  @description  Test users route
//  @access  Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//  @route  GET api/users/register
//  @description  Register user
//  @access  Public

router.post("/register", (req, res) => {});

module.exports = router;