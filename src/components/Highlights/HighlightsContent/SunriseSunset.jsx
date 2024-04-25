import React from 'react'
import { getSunTime } from '../../../utils/getWeekDay';

const SunriseSunset = ({current}) => {
    const {sunrise,sunset} =current;
    return (
        <div className="content">
            <div className="sunrise">
                {getSunTime(sunrise)}
            </div>
            <div className="sunset">
            {getSunTime(sunset)}
            </div>
        </div>
      )
}

export default SunriseSunset