export const getWeekDay = (dt) => {
    const date = new Date(dt * 1000);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  
}
export const getWeekDayFull = (dt) => {
    const date = new Date(dt * 1000);
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  
}

export const getIcon = (icon) => {    
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}
export const getTime = (dt) =>{
    const date = new Date(dt * 1000);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return {
        hours,
        minutes,
        seconds
    };
}

export const degToDirection = (num) => {
    const val = Math.floor((num / 22.5) + 0.5);
    const arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  };

export const getSunTime = (dt) =>{
    const milliseconds = dt * 1000; 
    const dateObject = new Date(milliseconds);
    let hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours %= 12;
    hours = hours || 12;
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${amOrPm}`;

    return timeString;
}
export const convertSpeed = (speed) =>{
    return (speed*3.6)
}