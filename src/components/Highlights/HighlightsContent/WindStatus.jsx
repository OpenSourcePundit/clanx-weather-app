
import React from 'react'
import { degToDirection } from '../../../utils/getWeekDay'

const WindStatus = ({current}) => {
    const {wind_speed,wind_deg} = current
  return (
    <div className="ss-content">
        <div className="wind-highlight-main">
            {wind_speed} <span>Km/h</span>
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