import React from 'react';
import './WeekCard.css';

const WeekCard = ({ weekday, iconSrc, maxTemp, minTemp }) => {

    return (
        // <div className="week-card-container">
            <div className="week-card">
                <div className="section">
                    <div className="weekday">{weekday}</div>
                </div>
                <div className="section">
                    <img src={iconSrc} alt="Weather Icon" className="icon" />
                </div>
                <div className="section">
                    <div className="temperatures">
                        <div className="max-temp">{maxTemp}&deg;</div>
                        <div className="min-temp">{minTemp}&deg;</div>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default WeekCard;