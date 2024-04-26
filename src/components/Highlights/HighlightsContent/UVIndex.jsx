import React from 'react'
import "./HighlightsContent.css"
import ProgressBar from 'react-customizable-progressbar'



const UVIndex = ({current}) => {
    const {uvi} = current;

    return (
      <div className="uv">
    <ProgressBar
    radius={70}
    progress={uvi}
    steps={15}
    cut={180}
    rotate={180}
    strokeWidth={18}
    strokeColor="#ffce54"
    strokeLinecap="butt"
    trackStrokeWidth={10}
    trackStrokeLinecap="butt"
/>
<div className="uv-index">
  {uvi}
</div>

      </div>)
}

export default UVIndex