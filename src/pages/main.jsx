
import React,{ useState} from 'react'
import "./main.css"
import WeekForecast from '../components/WeekForecast/WeekForecast'
import HeaderRh from '../components/Header/Header'
import SearchBar from '../components/SearchBox/SearchBox'
import Sidebar from '../components/Sidebar/Sidebar'
import DayForecast from '../components/DayForecast/DayForecast'

const Main = () => {

    const [activeTab,setActiveTab] = useState("week")

  
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