import React from 'react'

const Humidity = ({current}) => {
    const {humidity} = current
    return (
      <div className="content">
          <div className="highlight-main">
              
           <> {humidity}%</>
           {/* <div className="sidebar">o</div> */}
  
          </div>
          <div className="highlight-footer">
              Average
          </div>
  
      </div>
  )
}

export default Humidity