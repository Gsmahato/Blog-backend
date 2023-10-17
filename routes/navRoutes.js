const express = require("express");
const { getAllNavbarItems, createNavbarItem, deleteNavbarItem } = require('../controllers/navController');

// router objects
const router = express.Router();

// GET ALL ITEMS || GET
router.get("/get-navitem", getAllNavbarItems);

// CREATE ITEM || POST
router.post("/create-navitem", createNavbarItem);

// ITEM || DELETE
router.delete("/delete-navitem/:id", deleteNavbarItem);

module.exports = router;