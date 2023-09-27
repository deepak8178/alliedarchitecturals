const express = require("express");
const viewController = require("../controllers/viewController");

const router = express.Router();

router.get("/", viewController.getHome);
router.get("/about", viewController.getAbout);
router.get("/contact-us", viewController.getContact);
router.get("/service/:slug", viewController.getServices);
router.get("/samples", viewController.getSamples);
router.get("/career", viewController.getCareers);
router.get("/blogs", viewController.getBlogs);
router.get("/blog/:slug", viewController.getBlog);
router.get("/dashboard", viewController.getDashboard);
router.get("/privacy-policy", viewController.getPrivacy);
router.get("/terms-conditions", viewController.getTerms);

module.exports = router;
