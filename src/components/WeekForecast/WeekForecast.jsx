import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../../Context/dataContext'
import WeekCard from '../WeekCard/WeekCard'
import  {getWeekDay, getIcon } from '../../utils/getWeekDay'
import "./WeekForecast.css"
const WeekForecast = () => {

  const {daily} = useContext(DataContext)



  return (
    <div className="week-forecast">
      {daily?.map((day,index)=>index!==0?<WeekCard weekday={getWeekDay(day.dt)} iconSrc={getIcon(day.weather[0].icon)} maxTemp={day.temp.max} minTemp={day.temp.min}     />:<></>)}

    </div>
  )
}

export default WeekForecast