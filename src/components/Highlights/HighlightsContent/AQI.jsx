import React from 'react'

const AQI = ({current}) => {
    const {uvi} =current;
  return (
    <div className="content">
        UVdex={uvi}
    </div>
  )
}

export default AQI