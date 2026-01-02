import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

// List available Groq models (static list – Groq doesn't need an API call)
export async function listModels() {
  const models = [
    "llama3-8b-8192",
    "llama3-70b-8192",
    "mixtral-8x7b-32768",
    "gemma-7b-it"
  ];

  console.log("Available Groq models:", models);
  return models;
}

export async function callGroq(prompt) {
  if (!process.env.GROQ_API_KEY) {
    return "⚠️ GROQ_API_KEY environment variable is not set.";
  }

  try {
    const completion = await groq.chat.completions.create({
      model: "llama3-8b-8192", // 🔥 best for hackathons
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 512
    });

    console.log(
      "Groq response:",
      JSON.stringify(completion, null, 2)
    );

    return completion.choices?.[0]?.message?.content
      || "⚠️ Groq did not return a valid response.";

  } catch (err) {
    console.error("Groq API error:", err);
    return `⚠️ Groq API error: ${err.message || "Unknown error"}`;
  }
}
