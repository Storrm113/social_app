const express = require("express");
const router = express.Router();

// this is localhost:3000/api/users
router.get("/", (req, res, next) => {
  res.send(["user1", "user2", "user3"]);
});


//
// call to create tables
module.exports = router;
