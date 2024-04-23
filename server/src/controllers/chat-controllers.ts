import { Request, Response, NextFunction } from "express";
import OpenAIApi from "openai";
import ChatCompletionRequestMessage from "openai";
import User from "../models/User.js";
import { configureOpenAI } from "../config/openai-config.js";

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered OR token malfunctioned" });
    // grap chats of user
  
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content,
    })) as ChatCompletionRequestMessage[];
    chats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });
  
    // send all chats with new one to OpenAI API
    const config = configureOpenAI();
    const openai = new OpenAIApi(config);
    const chatResponse = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      message: chats,
    });
    user.chats.push(chatResponse.data.choices[0].message);
    await user.save();
    return res.status(200).json({ chats: user.chats });
    //get latest response
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong!"});
  }
};