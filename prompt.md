# 🤖 AI Integration

## AI Feature Used
Cine-Stream integrates Google Gemini AI to provide intelligent movie recommendations based on the user's mood or context.

---

# 📌 How AI is Used

The application includes an AI-powered feature called:

## "Mood Matcher"

Users can enter prompts such as:

```txt
"I want a dark sci-fi movie"

"Suggest a funny action movie"

"I feel sad but want motivation"

The prompt is sent to the Gemini AI API, which analyzes the mood/context and returns a single movie title recommendation.

That movie title is then automatically passed into the TMDB Search API to fetch and render movie details inside the application.

🔄 AI Workflow
User Mood Input
       ↓
Gemini AI API
       ↓
AI Generates Movie Title
       ↓
TMDB Search API
       ↓
Movie Rendered on UI

---


⚙️ AI Technologies Used
Google Gemini API
Prompt Engineering
API Chaining
Async API Handling

---

📂 AI Implementation Files
Gemini API Logic
src/api/gemini.js
AI Search Component
src/components/MoodSearch.jsx
AI Integration Logic
src/pages/Home.jsx
---

🧠 AI Engineering Concepts
AI-assisted recommendation systems
Contextual search
Prompt engineering
Multi-API orchestration
Intelligent user experience
