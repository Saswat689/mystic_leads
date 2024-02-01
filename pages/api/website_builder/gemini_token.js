export default async function handler(req, res) {
  res.json(process.env.GEMINI_API_KEY);
}
