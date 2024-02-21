const blogModel = require("../Models/blog.model");
const BlogsModel = require("../Models/blog.model");
const BlogService = require("../Services/blogs.service");
const BlogServiceInstance = new BlogService();

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogServiceInstance.findAll();
        return res.json(blogs);
    }
    catch(error) {
        res.status(500).json({ message: "Couldn't fetch blogs" });
    }
}

const getBlogById = async (req,res) => {
    try {
        const { id } = req.params;
        const blog = await BlogsModel.findById(id);
        res.json(blog);
    }
    catch(error) {
        res.json(error);
    }
}

const searchBlogs = async (req,res) => {
    try {
        const { title, authorEmail } = req.query;
        const result = await blogModel.find({title,
        authors: { $elemMatch: { email: authorEmail } }, 
        });
        res.json(result);
    }
    catch(error) {
        res.json(error);
    }
}

const createNewBlog = async (req,res) => {
    try {
        const blog = await BlogServiceInstance.create(req.body);
        return res.status(200).json(blog);
    }
    catch(error) {
        return res.status(500).json(error);
    }
}

const deleteBlogById = async (req,res) => {
    try {
        const documentId = req.params.id;
        const result = await BlogModel.findOneAndDelete({ _id: documentId });
        res.json(result);
    }
    catch(error) {
        res.json(error);
    }
}

const updateById = async (req,res) => {
    try {
        const { id } = req.params;
        const result = await BlogsModel.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
        })
        res.json(error);
    }
    catch(error) {
        res.json(error);
    }
}

module.exports = {
    getAllBlogs, getBlogById, searchBlogs, createNewBlog, deleteBlogById, updateById
}