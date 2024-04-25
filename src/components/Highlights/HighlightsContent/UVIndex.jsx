import React from 'react'
import "./UVI.css"
import VerticalProgressBar from './VerticalProgressBar';

const UVIndex = ({current}) => {
    const {uvi} =current;

    







    return (
      <div className="content">
          {/* <div role="progressbar" aria-valuenow="33" aria-valuemin="0" aria-valuemax="100" style={{ '--value': 33 }}>
      <div className="progress"></div>
    </div> */}

<VerticalProgressBar progress={70} />

      </div>)
}

export default UVIndex