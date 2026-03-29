const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    input: String,
    output: String,
    taskType: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);