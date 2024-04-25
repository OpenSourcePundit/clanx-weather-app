import React from 'react'


const Humidity = ({current}) => {
    const {humidity} = current
    return (
      <div className="humidity-content">
          <div className="humidity-highlight-main">
                <> {humidity}%</>
                <div className="humidity-highlight-footer">
                    Average
                </div>
          </div>
          <div className='slidecontainer'>
             <input id='slider' type="range" min="1" max="100" value={humidity}></input>
          </div>
       </div>
  
      
  )
}

export default Humidity