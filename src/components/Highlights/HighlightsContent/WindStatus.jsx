import React, { useContext } from 'react'
import { convertSpeed, degToDirection } from '../../../utils/util'
import { DataContext } from '../../../Context/dataContext'


const WindStatus = ({current}) => {
    const {wind_speed,wind_deg} = current
    const {unit} = useContext(DataContext)
  return (
    <div className="ss-content">
        <div className="wind-highlight-main">
            {parseFloat(unit==="metric"?convertSpeed(wind_speed):wind_speed).toFixed(2)} <span>{unit==="metric"?"Km/h":"miles/h"}</span>
        </div>
        <div className="wind-highlight-footer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Googlemap.svg/640px-Googlemap.svg.png" className='ss-img' alt="pin point" />
            <div className='ws-area'>
            {degToDirection(wind_deg)}
            </div>
        </div>

    </div>
  )
}

export default WindStatus