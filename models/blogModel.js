const mongoose = require("mongoose");
const slugify = require("slugify");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Kindly provide a title!"],
  },
  content_1: {
    type: String,
    required: [true, "Kindly provide content!"],
  },
  content_2: {
    type: String,
    required: [true, "Kindly provide content!"],
  },
  content_3: {
    type: String,
    required: [true, "Kindly provide content!"],
  },
  slug: String,
  author: {
    type: String,
    default: "Administrator",
  },
  dateOfPublish: {
    type: Date,
    default: Date.now(),
  },
  image: {
    type: String,
    // required: [true, "A tour must have a cover image"],
  },
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
blogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
