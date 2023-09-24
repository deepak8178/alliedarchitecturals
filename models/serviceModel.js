const mongoose = require("mongoose");
const slugify = require("slugify");

const serviceSchema = new mongoose.Schema({
  image: {
    type: String,
    required: [true, "A tour must have a cover image"],
  },
  heading: {
    type: String,
    required: [true, "A service must have heading"],
  },
  service: {
    type: String,
    required: [true, "Kindly provide all the services"],
  },
  para1: {
    type: String,
  },
  para2: {
    type: String,
  },
  para3: {
    type: String,
  },
  para4: {
    type: String,
  },
  industiresWeServe: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  slug: String,
});

// DOCUMENT MIDDLEWARE: runs before .save() and .create()
serviceSchema.pre("save", function (next) {
  this.slug = slugify(this.service, { lower: true });
  next();
});

const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;
