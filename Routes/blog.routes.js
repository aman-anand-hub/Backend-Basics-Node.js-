const router = require("express").Router();
const {getAllBlogs, getBlogById, searchBlogs, createNewBlog, deleteBlogById, updateById} = require("../Controllers/blogs.controller");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);
router.get("/search", searchBlogs);

router.post("/new", createNewBlog);

router.delete("/:id", deleteBlogById);

router.patch("/:id", updateById);

module.exports = router;