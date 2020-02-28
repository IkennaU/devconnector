const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Post = require("../../models/Posts");
const validatePostInput = require("../../validation/post");
const Profile = require("../../models/Profile");

router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
// @route GET api/posts
// @description  GET POST
// @access  Public
router.get("/", (req, res) => {
  Post.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ posterrors: "Can't Get Posts...." }));
});
// @route GET api/posts/:id
// @description  GET POST by id
// @access  Public
router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err =>
      res.status(404).json({ noPost: "No Post Found With That IDBCursor..." })
    );
});

// @route POST api/posts
// @description  Create POST
// @access  Private

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);
    // check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });
    newPost.save().then(post => res.json(post));
  }
);
// @route DELETE api/posts/:ID
// @description  DELETE POST
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id);
      })
      .then(post => {
        if (post.user.toString() !== req.user.id) {
          return res
            .status(401)
            .json({ notAuthorised: "User Not Authorised..." });
        }
        post.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ noPost: "No Post Found" }));
  }
);
// @route DELETE api/posts/like/:ID
// @description  like POST
// @access  Private
router.post(
  "like/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id })
      .then(profile => {
        Post.findById(req.params.id).then(post => {
          if (
            post.like.filter(like => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyLiked: "User Already Liked This Posts..." });
          }
          // Add User ID To Likes Array
          post.likes.unShift({ user: req.user.id });
          post.save().then(post => res.json(post));
        });
      })
      .catch(err => res.status(404).json({ noPost: "No Post Found" }));
  }
);

module.exports = router;