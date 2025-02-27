const express = require("express");
const userRoutes = require("./userRoutes");
// const albumRoutes = require("./albumRoutes");
const communityRoutes = require("./communityRoutes");
//const communityMemberRoutes = require("./communityMemberRoutes");
const messageRoutes = require("./messageRoutes");
const imgRoutes = require("./imgRoutes"); //Import image routes

const router = express.Router();

// Attach all routes
router.use("/users", userRoutes);
// router.use("/album", albumRoutes);
router.use("/communities", communityRoutes);
//router.use("/community-members", communityMemberRoutes);
router.use("/messages", messageRoutes);
router.use("/images", imgRoutes);

module.exports = router;
