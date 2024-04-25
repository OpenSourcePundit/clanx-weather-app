import React from 'react'
import { degToDirection } from '../../../utils/getWeekDay'

const WindStatus = ({current}) => {
    const {wind_speed,wind_deg} = current
  return (
    <div className="content">
        <div className="highlight-main">
            {console.log("wind",wind_speed)}
            {wind_speed}

        </div>
        <div className="highlight-footer">
            {degToDirection(wind_deg)}
        </div>

    </div>
  )
}

export default WindStatus