const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const callLLM = async (prompt) => {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant that gives summary and action points clearly."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.7,
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("OPENAI ERROR:", error.message);
    return "Error generating response";
  }
};

module.exports = { callLLM };