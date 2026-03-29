const Task = require("../models/Task");
const { processTask } = require("../services/agentService");

const handleTask = async (req, res) => {
  try {
    const { input } = req.body;

    const { result, taskType } = await processTask(input);

    const saved = await Task.create({
      input,
      output: result,
      taskType,
    });

    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getHistory = async (req, res) => {
  const data = await Task.find().sort({ createdAt: -1 });
  res.json(data);
};

module.exports = { handleTask, getHistory };