const mongoose = require("mongoose");
const validator = require("validator");

const authorSchema = new mongoose.Schema(
    {
        fullName: {type: String, maxLength: 25},
        twitterHandle: {type: String},
        email: {
            type: String,
            required: true,
            maxLength: 50,
            validate: (value) => validator.isEmail(value),
        },
        image: {
            type: String,
            validate: (value) =>validator.isURL(value),
        },
    },
    { _id: false }
);

const blogSchema = new mongoose.Schema(
    {
        title: {type: String, required: true, unique: true},
        authors: {type: [authorSchema]},
        content: {type: String, default: "Default Content"},
        publishedAt: {type: Date, default: null},
    },
    { timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema, "website");

module.exports = blogModel;