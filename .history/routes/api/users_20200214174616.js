const express = require("express");
const router = express.Router();

//  @route  GET api/users/test
//  @description  Test users route
//  @access  Public

router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

//  @route  GET api/users/register
//  @description  Register user
//  @access  Public

module.exports = router;
