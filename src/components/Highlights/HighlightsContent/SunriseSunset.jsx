import React from 'react'
import { getSunTime } from '../../../utils/util';
import "./HighlightsContent.css"

const SunriseSunset = ({current}) => {
    const {sunrise,sunset} =current;
    return (
        <div className="ss-content">
            <div className="sunrise">
                <img className='ss-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Eo_circle_yellow_arrow-up.svg/768px-Eo_circle_yellow_arrow-up.svg.png?20200417182715" alt="up arrow"></img>
            <div className='ss-text'>
                <div>{getSunTime(sunrise)}</div>
                <div className='ss-time'>-1m 46s</div>
            </div>
            </div>
            <div className="sunset">
            <img className='ss-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eo_circle_yellow_arrow-down.svg/768px-Eo_circle_yellow_arrow-down.svg.png?20200417182514" alt="down arrow"></img>
            <div className='ss-text'>
                <div>{getSunTime(sunset)}</div>
                <div className='ss-time'>+2m 46s</div>
            </div>
            </div>
        </div>
      )
}

export default SunriseSunset