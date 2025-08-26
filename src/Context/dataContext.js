import axios from "axios";
import { createContext, useCallback, useEffect, useReducer } from "react";
import { dataReducer } from "../Reducer/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    locationimage:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    location:"Kolkata,WestBengal,India",
    tab:"Week",
    status:"idle",
    unit:"metric",
    lat: 28.70,
    lon: 77.10,
    timezone: "",
    timezone_offset: null,
    current: {
      dt: null,
      sunrise: null,
      sunset: null,
      temp: null,
      feels_like: null,
      pressure: null,
      humidity: 0,
      dew_point: null,
      uvi: 0,
      clouds: null,
      visibility: 0,
      wind_speed: 0,
      wind_deg: null,
      wind_gust: null,
      weather: [],
    },
    daily: [],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchWeather = useCallback(async () => {
   
    try {  
      dispatch({
      type: "SET_LOADING",
    });

      const { data: weatherData } = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${state.lat}&lon=${state.lon}&exclude=minutely,hourly,alerts&units=${state?.unit}&appid=${process.env.REACT_APP_API_KEY}`
      );
      
      dispatch({
        type: "UPDATE_WEATHER_DATA",
        payload: weatherData,
      });

    } catch (err) {
      console.log(err);
    } finally {
        dispatch({
        type: "SET_IDLE"
      });
      
    }
  },[state.unit,state.lat,state.lon]);






  useEffect(() => {
    fetchWeather();
  }, [state.unit,state.lat,state.lon,fetchWeather]);

  return (
    <DataContext.Provider
      value={{ 
        locationimage:state.locationimage,
        location:state.location,
        tab:state.tab,
        status:state.status,
        unit:state.unit,
        lat: state.lat,
        lon: state.lon,
        timezone: state.timezone,
        timezone_offset: state.timezone_offset,
        current: state.current,
        daily:state.daily,
        dispatch: dispatch,

      }}
    >
      {children}
    </DataContext.Provider>
  );
};
