const express = require("express");
const {
  getAllusers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router objects
const router = express.Router();

// GET ALL USER || GET
router.get("/all-users", getAllusers);

// CREATE USER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

module.exports = router;
