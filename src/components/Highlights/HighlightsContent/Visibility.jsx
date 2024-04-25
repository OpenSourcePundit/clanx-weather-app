import React from 'react'

const Visibility = ({current}) => {
    const {visibility} = current
  return (
    <div className="ss-content">
        <div className="wind-highlight-main">
            
            {visibility/1000}<span>Km</span>

        </div>
        <div className="wind-highlight-footer">
            Average ☹️
        </div>

    </div>
  )
}

export default Visibility