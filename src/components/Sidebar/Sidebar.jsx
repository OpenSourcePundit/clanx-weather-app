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
          {Math.trunc(current?.temp)}<span class="degree">&deg;{unit==="metric"?'C':'F'}</span>  </div>
        <div className='sidebar-day'>{getWeekDayFull(current?.dt)} , {getSunTime(current.dt)}</div>
      </div>
      <div className='sidebar-down'>
        <div className='sidebar-text'>
          <div className='sidebar-weather-up'>{current?.weather[0]?.description}</div>
          <div className='sidebar-weather-down'>Rain </div>
        </div>
        <div className='sidebar-city-img'>
          <img src={`${locationimage}`} alt="City" className="city-picture" />
          <div className="city-text">{location}</div> {/* Text to be added */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
