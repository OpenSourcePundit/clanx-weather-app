import React, { useContext } from 'react'

import "./HeaderRh.css"
import { DataContext } from '../../Context/dataContext'
const HeaderRh = ({activeTab,setActiveTab}) => {


  
  const {unit,dispatch} = useContext(DataContext)
  const toggleUnit = () =>{
    dispatch({type:"TOGGLE_UNIT"})
  }

  return (
    <header className="header-rh">
      <div className="tabs-left">
        <button className={`tab ${activeTab!=='week'?'active':''} `}  onClick={()=>setActiveTab("today")}  >Today</button>
        <button className={`tab ${activeTab==='week'?'active':''} `} onClick={()=>setActiveTab("week")}  >Week</button>
      </div>
      <div className='tabs-right'>
        <div className="tab temperature-buttons">
          <button className={`temperature-btn ${unit==="metric"?'active':''}`} onClick={()=>toggleUnit()}>°C</button>
          <button className={`temperature-btn ${unit!=="metric"?'active':''}`}
          onClick={()=>toggleUnit()}>°F</button>
        </div>
        <div className="tab profile-icon">
          <img src="https://i.ibb.co/1vGzhyY/7309683.jpg" alt="Profile" className="profile-picture" />
        </div>
      </div>
      
    </header>
  )
}

export default HeaderRh