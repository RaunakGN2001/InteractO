const express = require('express');
const { registerUser, authUser, allUsers } = require('../controller/userControllers'); // all these functions are controller functions
const router = express.Router();

router.post("/", registerUser);
router.post("/login", authUser);

router.get("/", allUsers);

module.exports = router;
