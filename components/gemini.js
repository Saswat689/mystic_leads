import axios from "axios";

export default function gemini(prompt) {
  return new Promise((resolve, reject) => {
    axios.get("/api/website_builder/gemini_token").then(async (res) => {
      const result = await axios.post(
        `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${res.data}`,
        {
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
          generationConfig: {
            stopSequences: ["Title"],
            temperature: 1.0,
            maxOutputTokens: 10000,
            topP: 0.8,
            topK: 10,
          },
          safetySettings: [
            {
              category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            },
          ],
        }
      );
      const response = await result.data;
      console.log(
        response.candidates.at(0),
        response.candidates.at(0) === "RECITATION"
      );
      if (response.candidates.at(0).finishReason === "RECITATION") {
        reject("RECITATION");
        return;
      } else {
        resolve(response.candidates.at(0).content.parts.at(0).text);
        return;
      }
    });
  });
}
