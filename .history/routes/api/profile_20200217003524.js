const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route GET api/profile/test
// @description Test profile route
// @access  Public

router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

// @route GET api/profile/test
// @description Get Current users profile
// @access  Private
router.get(
  "./",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Profile.findOne({ user: req.user.id }).then(profile => {
      if (!profile) {
        errors.noprofile = "There Is No Profile for This User...";
        return res.status(404).json(errors);
      }
    });
  }
);

module.exports = router;
