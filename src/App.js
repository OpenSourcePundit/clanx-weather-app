import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DayWeather from './pages/DayWeather/DayWeather';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
       <Main/>     
    </div>
  );
}

export default App;