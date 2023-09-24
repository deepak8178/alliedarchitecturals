const express = require("express");
const blogController = require("../controllers/blogController");

const router = express.Router();

router.get("/get", blogController.getBlogs);
router.post("/create", blogController.createBlog);
router
  .route("/:slug")
  .patch(blogController.updateBlogByTitle)
  .delete(blogController.deleteBlogByTitle);

router
  .route("/:id")
  .delete(blogController.deleteBlog)
  .patch(blogController.updateBlog);

module.exports = router;
