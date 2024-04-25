import React from 'react'
import "./HeaderRh.css"
const HeaderRh = () => {
  return (
    <header className="header-rh">
      <div className="tabs-left">
        <button className="tab active">Today</button>
        <button className="tab">Week</button>
        <div className="active-tab-underline"></div>
      </div>
      <div className='tabs-right'>
        <div className="tab temperature-buttons">
          <button className="temperature-btn active">°C</button>
          <button className="temperature-btn">°F</button>
        </div>
        <div className="tab profile-icon">
          <img src="https://i.ibb.co/1vGzhyY/7309683.jpg" alt="Profile" className="profile-picture" />
        </div>
      </div>
      
    </header>
  )
}

export default HeaderRh