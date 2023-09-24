const Blog = require("./../models/blogModel");
const AppError = require("./../utils/appError");

exports.createBlog = async (req, res, next) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: blog,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: {
        data: blogs,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return next(new AppError("No document found with that id", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.updateBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return next(new AppError("No document found with that id", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: blog,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.updateBlogByTitle = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndUpdate(req.params.slug, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return next(new AppError("No document found with that id", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: blog,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteBlogByTitle = async (req, res, next) => {
  try {
    const blog = await Blog.findOneAndDelete(req.params.slug);
    if (!blog) {
      return next(new AppError("No document found with that id", 404));
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (e) {
    console.log(e);
  }
};
