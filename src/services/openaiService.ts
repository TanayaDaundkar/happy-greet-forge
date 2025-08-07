
import { NewsItem } from "@/types/aiUpdates";

export async function fetchNewsFromOpenAI(apiKey: string): Promise<NewsItem[]> {
  if (!apiKey) {
    throw new Error("OpenAI API key is required");
  }

  const prompt = `
    Generate 5 latest updates about AI technology in JSON format. 
    Include the following fields for each update: 
    1. title - A catchy, informative title about a significant AI development or news
    2. date - Today's date in format "MMM D, YYYY" 
    3. summary - A concise 1-2 sentence summary of the AI update or development
    4. link - (Optional) Link to more information if available, otherwise omit this field
    
    Focus on recent developments in:
    - Artificial Intelligence breakthroughs
    - Machine Learning innovations
    - AI Tools & new applications
    - Major Tech Company AI announcements
    
    Format your response as a valid JSON array with these objects.
    Do not include any explanatory text outside the JSON.
  `;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system", 
            content: "You are an AI news specialist that generates the latest AI updates in JSON format."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`OpenAI API error: ${errorData.error?.message || response.statusText}`);
    }

    const data = await response.json();
    
    try {
      // Parse the content from the OpenAI response
      const content = data.choices[0].message.content;
      
      // Extract JSON by finding the first [ and last ]
      const jsonStartIndex = content.indexOf('[');
      const jsonEndIndex = content.lastIndexOf(']') + 1;
      
      if (jsonStartIndex >= 0 && jsonEndIndex > jsonStartIndex) {
        const jsonContent = content.substring(jsonStartIndex, jsonEndIndex);
        return JSON.parse(jsonContent);
      } else {
        // Try to parse the entire content as JSON
        return JSON.parse(content);
      }
    } catch (parseError) {
      console.error("Error parsing OpenAI response:", parseError);
      throw new Error("Failed to parse the AI-generated news response");
    }
  } catch (error) {
    console.error("Error fetching from OpenAI API:", error);
    throw error;
  }
}
