import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateEmailDraft = async (
  topic: string, 
  tone: 'professional' | 'friendly' | 'inquisitive'
): Promise<string> => {
  if (!ai) {
    console.warn("API Key not found, returning mock response");
    return "I am interested in your sustainable bags and would like to learn more about your process.";
  }

  try {
    const prompt = `Write a short, concise, and ${tone} message from a customer to a sustainable bag brand named 'Ishara'. 
    The message is about: "${topic}". 
    Keep it under 50 words. Do not include subject lines or placeholders like [Name]. Just the body text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "I'm interested in your products.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am interested in your sustainable products.";
  }
};
