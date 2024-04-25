import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { dataReducer } from "../Reducer/dataReducer";
import { demo } from "../demodata";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    locationimage:"https://images.unsplash.com/photo-1444723121867-7a241cacace9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tab:"Week",
    status:"idle",
    unit:"metric",
    lat: null,
    lon: null,
    timezone: "",
    timezone_offset: null,
    current: {
      dt: null,
      sunrise: null,
      sunset: null,
      temp: null,
      feels_like: null,
      pressure: null,
      humidity: null,
      dew_point: null,
      uvi: null,
      clouds: null,
      visibility: null,
      wind_speed: null,
      wind_deg: null,
      wind_gust: null,
      weather: [],
    },
    daily: [],
  };
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const fetchWeather = async () => {
    console.log("unit",state.unit)
    try { 
      const { data: weatherData } = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=28.70&lon=77.10&exclude=minutely,hourly,alerts&units=${state?.unit}&appid=b08bf90d3dc2d9c6358ce2636fd00398`
      );
      
      dispatch({
        type: "UPDATE_WEATHER_DATA",
        payload: weatherData,
      });

    } catch (err) {
      console.log(err);
    }
  };






  useEffect(() => {
    fetchWeather();
  }, [state.unit]);

  return (
    <DataContext.Provider
      value={{ 
        locationimage:state.locationimage,
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
