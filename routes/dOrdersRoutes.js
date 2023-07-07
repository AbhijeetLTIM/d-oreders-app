const express = require("express");
const router = express.Router();

const {
  getDOrders,
  getDOrdersById,
  crearteDOrders,
  deleteDOrdersById,
  updateDOrdersById,
} = require("../controllers/dOrdersController");

router.route("/").get(getDOrders).post(crearteDOrders);

router
  .route("/:id")
  .get(getDOrdersById)
  .put(updateDOrdersById)
  .delete(deleteDOrdersById);

module.exports = router;
