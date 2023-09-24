const Service = require("../models/serviceModel");
const Blog = require("../models/blogModel");
const AppError = require("../utils/appError");

exports.createService = async (req, res, next) => {
  try {
    const service = await Service.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        data: service,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      status: "success",
      results: services.length,
      data: {
        data: services,
      },
    });
  } catch (e) {
    console.log(e);
  }
};

exports.deleteService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
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

exports.updateService = async (req, res, next) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!service) {
      return next(new AppError("No document found with that id", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        data: service,
      },
    });
  } catch (e) {
    console.log(e);
  }
};
