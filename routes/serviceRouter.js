const express = require("express");
const serviceController = require("./../controllers/serviceController");

const router = express.Router();

router.get("/get", serviceController.getServices);
router.post("/create", serviceController.createService);
router
  .route("/:id")
  .delete(serviceController.deleteService)
  .patch(serviceController.updateService);

module.exports = router;
