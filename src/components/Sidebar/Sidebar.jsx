import React, { useContext } from 'react';
import "./Sidebar.css";
import { DataContext } from '../../Context/dataContext';
import { getIcon, getSunTime, getWeekDayFull } from '../../utils/getWeekDay';

const Sidebar = () => {

  const {current,unit,locationimage,location} = useContext(DataContext)

  return (
    <div className="sidebar">
      <div className='sidebar-up'>
        <div className='side-img'>
          <img src={`${getIcon(current?.weather[0]?.icon)}`} alt="temp" className="temp-picture" />
        </div>
        <div className='sidebar-temp'>
          {Math.trunc(current?.temp)}<span className="degree">&deg;{unit==="metric"?'C':'F'}</span>  </div>
        <div className='sidebar-day'>{getWeekDayFull(current?.dt)} , {getSunTime(current.dt)}</div>
      </div>
      <div className='sidebar-down'>
        <div className='sidebar-text'>
          {current.weather.map((weather,index)=><div key={index} className='sidebar-weather-up'> <img src={`${getIcon(weather.icon)}`} alt="" width={25} height={25} /> {weather?.description}</div>)}
        </div>
        <div className='sidebar-city-img'>
          <img src={`${locationimage}`} alt="City" className="city-picture" />
          <div className="city-text">{location}</div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
