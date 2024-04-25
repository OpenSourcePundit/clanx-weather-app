import React from 'react'
import "./Sidebar.css"


const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className='sidebar-up'>
        <div className='side-img'>
             <img src="https://images.unsplash.com/photo-1458668383970-8ddd3927deed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3VkJTIwYW5pbWF0ZWR8ZW58MHx8MHx8fDA%3D" alt="temp" className="temp-picture" />
        </div>
        <div className='sidebar-temp'>12&deg;</div>
        <div className='sidebar-day'>Monday, xyz</div>
      </div>

      <div className='sidebar-down'>
        <div className='sidebar-text'>
            <div className='sidebar-weather-up'>Mostly cloudy</div>
            <div className='sidebar-weather-down'>Rain </div>
        </div>
        <div className='sidebar-city-img'>
        <img src="https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="City" className="city-picture" />
        </div>
      </div>

    </div>
  )
}

export default Sidebar