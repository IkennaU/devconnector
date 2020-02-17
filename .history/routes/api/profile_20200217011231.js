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

// @route GET api/profile
// @description Get Current users profile
// @access  Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        if (!profile) {
          return res
            .status(404)
            .json({ noprofile: "There Is No Profile for This User..." });
        }
        res.json(profile);
      })
      .catch(err => res.status(404).json(err));
  }
);

// @route POST api/profile
// @description Create User Profile
// @access  Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // Get Fields
    const profileFields = {};
    profileFields.user = req.user.id;
  }
);

module.exports = router;
