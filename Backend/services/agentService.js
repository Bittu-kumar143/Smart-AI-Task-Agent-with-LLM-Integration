const { callLLM } = require("./llmService");

const processTask = async (input) => {
  let taskType = "general";
  let result = "";

  if (input.toLowerCase().includes("summarize")) {
    taskType = "summarize";
    result = await callLLM(`Summarize this:\n${input}`);
  } 
  else if (input.toLowerCase().includes("action")) {
    taskType = "action";
    result = await callLLM(`Extract action items:\n${input}`);
  } 
  else {
    result = await callLLM(input);
  }

  return { result, taskType };
};

module.exports = { processTask };