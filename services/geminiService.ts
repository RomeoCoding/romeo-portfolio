import { GoogleGenAI, Type } from "@google/genai";
import type { Project } from '../types';

if (!process.env.API_KEY) {
  // In a real app, you'd want to handle this more gracefully.
  // For this example, we'll log an error.
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const projectSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A creative and professional title for the project. Max 5 words.",
    },
    description: {
      type: Type.STRING,
      description: "A concise, one-paragraph summary of the project. Explain its purpose and target audience.",
    },
    features: {
      type: Type.ARRAY,
      description: "A list of 3 to 5 key features of the project.",
      items: {
        type: Type.STRING,
      },
    },
    technologies: {
      type: Type.ARRAY,
      description: "A list of relevant technologies used, drawing from skills like SystemVerilog, C++, Python, MATLAB, etc.",
      items: {
        type: Type.STRING,
      },
    },
  },
  required: ["title", "description", "features", "technologies"],
};


export const generateProjectDetails = async (idea: string): Promise<Project> => {
  const prompt = `Based on my skills (Computer and Electronics Engineering student at Technion, proficient in Hardware Design (SystemVerilog, UVM, LTSpice), Programming (C, C++, Python), and Software tools (Git, MATLAB)) and this project idea: "${idea}", generate a detailed project description. The project should be impressive for a job application. Flesh out the concept with a creative title, a compelling description, key features, and a realistic tech stack that leverages my core engineering and programming skills.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: projectSchema,
      },
    });

    const text = response.text.trim();
    
    // Sometimes the API might wrap the JSON in markdown backticks
    const cleanedText = text.replace(/^```json\n?/, '').replace(/\n?```$/, '');
    
    const projectData: Project = JSON.parse(cleanedText);
    return projectData;

  } catch (error) {
    console.error("Error generating project details:", error);
    throw new Error("Failed to generate project details from AI. Please check your API key and try again.");
  }
};