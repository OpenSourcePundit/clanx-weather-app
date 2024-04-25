export const dataReducer = (state, {type, payload})=>{
    
    switch(type){
        case "UPDATE_WEATHER_DATA":           
            return  {
                ...state,
                lat: payload.lat !== null ? payload.lat : state.lat,
                lon: payload.lon !== null ? payload.lon : state.lon,
                timezone: payload.timezone !== "" ? payload.timezone : state.timezone,
                timezone_offset: payload.timezone_offset !== null ? payload.timezone_offset : state.timezone_offset,
                current: {
                  ...state.current,
                  dt: payload.current.dt !== null ? payload.current.dt : state.current.dt,
                  sunrise: payload.current.sunrise !== null ? payload.current.sunrise : state.current.sunrise,
                  sunset: payload.current.sunset !== null ? payload.current.sunset : state.current.sunset,
                  temp: payload.current.temp !== null ? payload.current.temp : state.current.temp,
                  feels_like: payload.current.feels_like !== null ? payload.current.feels_like : state.current.feels_like,
                  pressure: payload.current.pressure !== null ? payload.current.pressure : state.current.pressure,
                  humidity: payload.current.humidity !== null ? payload.current.humidity : state.current.humidity,
                  dew_point: payload.current.dew_point !== null ? payload.current.dew_point : state.current.dew_point,
                  uvi: payload.current.uvi !== null ? payload.current.uvi : state.current.uvi,
                  clouds: payload.current.clouds !== null ? payload.current.clouds : state.current.clouds,
                  visibility: payload.current.visibility !== null ? payload.current.visibility : state.current.visibility,
                  wind_speed: payload.current.wind_speed !== null ? payload.current.wind_speed : state.current.wind_speed,
                  wind_deg: payload.current.wind_deg !== null ? payload.current.wind_deg : state.current.wind_deg,
                  wind_gust: payload.current.wind_gust !== null ? payload.current.wind_gust : state.current.wind_gust,
                  weather: payload.current.weather.length > 0 ? payload.current.weather : state.current.weather,
                },
                daily: payload.daily.length > 0 ? payload.daily : state.daily,
            };      
            case "TOGGLE_UNIT":
                return {
                    ...state,
                    unit: state.unit === "metric" ? "imperial" : "metric"
                };

            
        
        case "SET_LOCATION":
            console.log("payload-",payload)
            return {...state,lat:payload.lat,lon:payload.lon,location:payload.location}
        
            case "fetch_wishlist":
            return {...state, wishlist:[...payload], wishlistLength: payload.length }
 
        case "logout":
            return {...state, cart:[], cartLength:0, wishlistLength:0, wishlist:[], isLoggedIn:false }
 
        
        default:
            return state;
    }
    
 }