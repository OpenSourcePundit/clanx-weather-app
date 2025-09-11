# 🌦️ Weather App

![Weather App Preview](https://i.ibb.co/5XvT8xyT/weather-app.jpg)

A visually appealing **Weather Dashboard** built with React, providing real-time weather data, forecasts, and location-based search.  
The app supports both **Metric** and **Imperial** units, making it usable worldwide.

---

## 🚀 Features

- **7-Day Weather Forecast** 📅  
- **Real-time Weather Conditions** (Temperature, Pressure, Feels Like, etc.)  
- **UV Index** 🌞  
- **Wind Status** 💨  
- **Sunrise & Sunset Times** 🌅  
- **Humidity** 💧  
- **Visibility** 👀  
- **Air Quality Index (AQI)** 🌍 *(mock implementation, since API doesn’t provide it)*  
- **Location Search with Autocomplete** (Top 5 suggestions) 🔍  
  - Powered by React **Debounce + Callback** to optimize performance and reduce API calls  

---

## 🌐 APIs Used

- [OpenWeatherMap API](https://openweathermap.org/api) – Weather data & forecasts  
- [OpenWeatherMap Geocoding API](https://openweathermap.org/api/geocoding-api) – Location search  

---

## 📸 Screenshots

> ![Web App](https://i.ibb.co/Jw5b0zGs/Screenshot-2025-09-11-072926.png)
> ![Mobile View](https://i.ibb.co/5WSCDbnr/Screenshot-2025-09-11-073041.png)
> ![Mobile View](https://i.ibb.co/PvRDq2Hj/Screenshot-2025-09-11-073027.png)




---

## 🛠️ Tech Stack

- **React.js (CRA)** – Frontend framework  
- **OpenWeatherMap API** – Weather data provider  
- **CSS / Styled Components** – UI design  
- **Debounce Handling** – Optimized search performance  

---

## 📦 Installation & Setup

Clone the repository and install dependencies:

---in bash

# Clone the repo
git clone https://github.com/your-username/weather-app.git

# Navigate into the project folder
cd weather-app

# Install dependencies
npm install

#Create a .env file in the root directory and add your OpenWeatherMap API key:
REACT_APP_WEATHER_API_KEY=your_api_key_here
