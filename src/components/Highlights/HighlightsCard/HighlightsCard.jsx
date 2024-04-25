
import React from "react";
import UVIndex from "../HighlightsContent/UVIndex";
import WindStatus from "../HighlightsContent/WindStatus";
import SunriseSunset from "../HighlightsContent/SunriseSunset";
import Humidity from "../HighlightsContent/Humidity";
import Visibility from "../HighlightsContent/Visibility";
import AQI from "../HighlightsContent/AQI";
import "./HighlightsCard.css"

const HighlightsCard = ({ head, current }) => {
  return (
    <div className="highlights-card">
      <div className="hightlights-section ">
        <div className="head">{head}</div>
      </div>
      <div className="highlights-section-content">
        {(() => {
          switch (head) {
            case "UV Index":
              return <UVIndex current={current}/>;
            case "Wind Status":
              return <WindStatus current={current}/>;
            case "Sunrise & Sunset":
              return <SunriseSunset current={current}/>;
            case "Humidity":
              return <Humidity current={current}/>;
            case "Visibility":
              return <Visibility current={current}/>;
            case "Air Quality":
              return <AQI current={current}/>;
            default:
              return <>Default Case</>;
          }
        })()}
      </div>
    </div>
  );
};

export default HighlightsCard;