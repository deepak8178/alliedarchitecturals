const Service = require("./../models/serviceModel");
const Blog = require("./../models/blogModel");

exports.getHome = async (req, res, next) => {
  try {
    const services = await Service.find();
    const blogs = await Blog.find();
    res.status(200).render("home", {
      title: "Home",
      services,
      blogs,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getContact = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).render("contact", {
      title: "Contact Us",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getAbout = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).render("about", {
      title: "About",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    const service = await Service.findOne({ slug: req.params.slug });
    res.status(200).render("services", {
      title: "Services",
      services,
      service,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getSamples = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).render("samples", {
      title: "Samples",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getCareers = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).render("careers", {
      title: "Careers",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();
    const services = await Service.find();
    res.status(200).render("blogs", {
      title: "Blogs",
      blogs,
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getBlog = async (req, res, next) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    console.log(blog);
    const services = await Service.find();
    res.status(200).render("blog", {
      title: blog.title,
      blog,
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getDashboard = async (req, res, next) => {
  try {
    const services = await Service.find();
    const blogs = await Blog.find();

    res.status(200).render("dashboard", {
      title: "dashboard",
      services,
      blogs,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getPrivacy = async (req, res, next) => {
  try {
    const services = await Service.find();

    res.status(200).render("privacy-policy", {
      title: "Privacy & Policy",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getTerms = async (req, res, next) => {
  try {
    const services = await Service.find();

    res.status(200).render("terms", {
      title: "dashboard",
      services,
    });
  } catch (e) {
    console.log(e);
  }
};
