import React from "react";
import { useContext } from "react";
import { DataContext } from "../../Context/dataContext";
import WeekCard from "../WeekCard/WeekCard";
import { getWeekDay, getIcon } from "../../utils/util";
import "./WeekForecast.css";
import { HighlightsCardHead } from "../../utils/constants";
import HighlightsCard from "../Highlights/HighlightsCard/HighlightsCard";


const WeekForecast = () => {
  const { daily,current } = useContext(DataContext);

  return (
    <div className="week-data">
    <div className="week-forecast">
      {daily?.map((day, index) =>
        index !== 0 ? (
          <WeekCard key={day.dt}
            weekday={getWeekDay(day.dt)}
            iconSrc={getIcon(day.weather[0].icon)}
            maxTemp={day.temp.max}
            minTemp={day.temp.min}
          />
        ) : (
          <div key={day.dt}></div>
        )
      )}
    </div>
    <h3 className="highlights-head">Today's Highlights</h3>
    <div className="highlights-section">
      {HighlightsCardHead.map((head,index)=><HighlightsCard key={head} head={head} current={current} />)}
    
    </div>
    

    
    </div>
  );
};

export default WeekForecast;