// app/api/gemini/route.ts
import { NextResponse } from "next/server";
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Not used, just integrated in the frontend for demonstration purposes.
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: Request) {
  const inputData = await request.json();

  try {
    const result = await model.generateContent(inputData.text);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json(text);
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    return NextResponse.json(
      { error: "Error calling Gemini AI" },
      { status: 500 }
    );
  }
}
