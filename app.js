const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");

const AppError = require("./utils/appError");
const blogRouter = require("./routes/blogRouter");
const serviceRouter = require("./routes/serviceRouter");
const viewRouter = require("./routes/viewRouter");
const viewController = require("./controllers/viewController");

const app = express();

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection successful!!"))
  .catch((err) => console.error("DB connection error:", err));

// Setting template engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serving Static Files
app.use(express.static(path.join(__dirname, "public")));

// Body parser, reading data from the body into request.body
app.use(express.json({ limit: "10kb" }));

// Test middleware
app.use((request, response, next) => {
  request.requestTime = new Date().toISOString();
  next();
});

// ROUTES
app.use("/", viewRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/services", serviceRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

// Server
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

module.exports = app;
