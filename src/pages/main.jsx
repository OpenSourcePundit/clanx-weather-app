
import React,{useEffect} from 'react'
import "./main.css"
import { useContext } from 'react'
import { DataContext } from '../Context/dataContext'
import WeekForecast from '../components/WeekForecast/WeekForecast'
import HeaderRh from '../components/HeaderRH/HeaderRh'
import SearchBar from '../components/SearchBar/SearchBar'
import Sidebar from '../components/Sidebar/Sidebar'

const Main = () => {

    const {
        lat,
        lon,
        timezone,
        timezone_offset,
        current,
        daily,
        status,
        unit
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
                <HeaderRh/>
                <WeekForecast/>
            </div>
        </div>
  )
}

export default Main