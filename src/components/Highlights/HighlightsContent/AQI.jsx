import React from 'react'

const AQI = () => {
    
  return (
<div className="humidity-content">
<div className="humidity-highlight-main">
      <> 240</>
      <div className="humidity-highlight-footer">
          Unhealthy☹️
      </div>
</div>
<div className='slidecontainer'>
   <input id='slider' type="range" min="1" max="100" value="80" readOnly></input>
</div>
</div>

  )
}

export default AQI