const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// routes
// GET || all-blogs
router.get("/all-blog", getAllBlogsController);

// POST || create-blog
router.post("/create-blog", createBlogController);

// PUT || update-blog
router.put("/update-blog/:id", updateBlogController);

// GET || Single-Blog-Betails
router.get("/get-blog/:id", getBlogIdController);

// DELETE || delete-blog
router.delete("/delete-blog/:id", deleteBlogController);

// GET || user blog
router.get("/user-blog/:id", userBlogController);
module.exports = router;
