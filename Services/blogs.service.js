const BlogsModel = require("../Models/blog.model");

class BlogService {
    findAll = async () => {
        const blogs = await BlogsModel.find({});
        return blogs;
    }

    create = async (blogDoc) => {
        const newBlogDoc = new BlogsModel(blogDoc);
        const data = await newBlogDoc.save();

        return data;
    }
}

module.exports = BlogService;