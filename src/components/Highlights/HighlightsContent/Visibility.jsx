import React from 'react'

const Visibility = ({current}) => {
    const {visibility} = current
  return (
    <div className="content">
        <div className="highlight-main">
            
            {visibility/1000}Km

        </div>
        <div className="highlight-footer">
            Average
        </div>

    </div>
  )
}

export default Visibility