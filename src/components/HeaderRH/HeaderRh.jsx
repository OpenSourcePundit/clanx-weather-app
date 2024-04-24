import React from 'react'
import "./headerRh.css"
const HeaderRh = () => {
  return (
    <header className="header">
      <div className="tabs">
        <button className="tab active">Today</button>
        <button className="tab">Week</button>
        <div className="active-tab-underline"></div>
      </div>
      <div className="temperature-buttons">
        <button className="temperature-btn active">°C</button>
        <button className="temperature-btn">°F</button>
      </div>
      <div className="profile-icon">
        <img src="https://i.ibb.co/1vGzhyY/7309683.jpg" alt="Profile" className="profile-picture" />
      </div>
    </header>
  )
}

export default HeaderRh