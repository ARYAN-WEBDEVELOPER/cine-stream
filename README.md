# 🎬 Cine-Stream

Cine-Stream is a Netflix-inspired Media Explorer SPA built using React, Vite, Tailwind CSS, and the TMDB API.  
The application allows users to discover popular movies, search movies dynamically, save favorites, and even get AI-powered movie recommendations based on mood.

---

# 🚀 Live Features

## ✅ Popular Movies Feed
- Fetches trending/popular movies from TMDB API
- Responsive movie grid layout
- Modern Netflix-style UI

## ✅ Dynamic Search
- Real-time movie searching
- TMDB Search API integration
- Empty state handling

## ✅ Debounced Search
- Optimized API requests
- 500ms debounce architecture
- Prevents excessive HTTP calls

## ✅ Infinite Scroll
- Automatic loading of next pages
- Intersection Observer API
- Large-scale feed rendering

## ✅ Favorites System
- Add/remove favorite movies
- Persistent localStorage state
- Dedicated favorites route

## ✅ AI Mood Matcher
- Gemini AI integration
- Contextual movie recommendations
- AI → TMDB API orchestration

## ✅ Asset Optimization
- Native lazy loading images
- Faster rendering performance
- Reduced bandwidth usage

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router DOM

## APIs
- TMDB API
- Google Gemini API

## State & Performance
- React Hooks
- Debouncing
- Intersection Observer
- localStorage

---

# 📂 Project Structure

```bash
src/
│
├── api/
│   ├── tmdb.js
│   └── gemini.js
│
├── components/
│   ├── MovieCard.jsx
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   └── MoodSearch.jsx
│
├── hooks/
│   ├── useDebounce.js
│   └── useInfiniteScroll.js
│
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── utils/
│   └── localStorage.js
│
├── App.jsx
├── main.jsx
└── index.css

---

⚙️ Environment Variables

Create a .env file in root directory:

VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_GEMINI_API_KEY=your_gemini_api_key

---

🔑 API Setup
TMDB API

Get API Key from:

https://developer.themoviedb.org

Gemini API

Get API Key from:

https://aistudio.google.com

---

📦 Installation

Clone repository:

git clone https://github.com/YOUR_USERNAME/cine-stream.git

Move into project folder:

cd cine-stream

Install dependencies:

npm install

Run development server:

npm run dev

---


🧠 Engineering Concepts Implemented
Component Architecture
Infinite Scrolling
Debouncing
API Orchestration
Route Management
Persistent State
Lazy Loading
Custom Hooks
AI API Integration
Responsive Design

---

🚀 Deployment
GitHub

Code hosted on GitHub repository.

Vercel

Production deployment using Vercel.

👨‍💻 Author

Aryan 

📄 License

This project is built for educational and portfolio purposes.
