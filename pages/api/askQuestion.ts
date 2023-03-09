// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatID, model, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt!" });
    return;
  }
  if (!chatID) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
    return;
  }

  //ChatGPT Query

  const response = await query(prompt,chatID,session)
  res.status(200).json({ answer: "John Doe" });
}
