
import React,{useEffect, useState} from 'react'
import "./main.css"
import { useContext } from 'react'
import { DataContext } from '../Context/dataContext'
import WeekForecast from '../components/WeekForecast/WeekForecast'
import HeaderRh from '../components/HeaderRH/HeaderRh'
import SearchBar from '../components/SearchBar/SearchBar'
import Sidebar from '../components/Sidebar/Sidebar'
import DayForecast from '../components/DayForecast/DayForecast'

const Main = () => {

    const [activeTab,setActiveTab] = useState("week")

    const {
        lat,
        lon,
        timezone,
        timezone_offset,
        current,
        daily,
        status,
        unit,
        tab
      } = useContext(DataContext);
    
      const state = useContext(DataContext)

    //   if (status === 'loading') {
    //     return <div>Loading...</div>;
    // }

    // if (status === 'error') {
    //     return <div>Error: {error}</div>;
    // }
  
  return (
        <div className="wrapper-main">
            <div className="section-lh-main">
                <div className="header-lh">
                    <SearchBar/>
                </div>
                <div className='body-lh'>
                    <Sidebar/>
                </div>
            </div>
            <div className="section-rh-main">              
                <HeaderRh activeTab={activeTab} setActiveTab={setActiveTab} />
                {activeTab==="week"?<WeekForecast/>:<DayForecast/>}
            </div>
        </div>
  )
}

export default Main