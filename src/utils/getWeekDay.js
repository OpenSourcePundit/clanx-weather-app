export const getWeekDay = (dt) => {
    const date = new Date(dt * 1000);
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const weekdayIndex = date.getDay();
    return weekdays[weekdayIndex];
  
}

export const getIcon = (icon) => {
    console.log("iconurl :",`https://openweathermap.org/img/wn/${icon}@2x.png`)
    return `https://openweathermap.org/img/wn/${icon}@2x.png`;
}