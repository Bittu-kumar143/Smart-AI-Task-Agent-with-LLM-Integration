const express = require("express");
const { handleTask, getHistory } = require("../controllers/taskController");

const router = express.Router();

router.post("/task", handleTask);
router.get("/history", getHistory);

module.exports = router;