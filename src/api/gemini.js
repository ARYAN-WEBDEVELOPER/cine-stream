import axios from "axios";

const API_KEY =
  import.meta.env.VITE_GEMINI_API_KEY;

export const getMovieRecommendation =
  async (mood) => {
    try {
      const response =
        await axios.post(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
          {
            contents: [
              {
                parts: [
                  {
                    text: `
Suggest ONLY ONE movie title.

No explanation.
No extra text.
No punctuation.

Mood: ${mood}
                    `,
                  },
                ],
              },
            ],
          }
        );

      return response.data.candidates[0]
        .content.parts[0].text;
    } catch (error) {
      console.log(error);

      return "";
    }
  };