import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import DayWeather from './pages/DayWeather/DayWeather';
import WeekWeather from './pages/WeekWeather/WeekWeather';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/day' element={<DayWeather/>}     />
        <Route path='/' element={<WeekWeather/>}    />
      </Routes>
     
    </div>
  );
}

export default App;
