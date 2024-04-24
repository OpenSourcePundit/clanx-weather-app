import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { dataReducer } from "../Reducer/dataReducer";
import { demo } from "../demodata";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    status:"idle",
    unit:"C",
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
    try { 
    //   const { data: weatherData } = await axios.get(
    //     "https://api.openweathermap.org/data/3.0/onecall?lat=28.70&lon=77.10&exclude=minutely,hourly,alerts&appid=b08bf90d3dc2d9c6358ce2636fd00398"
    //   );
      
      dispatch({
        type: "UPDATE_WEATHER_DATA",
        payload: demo,
      });

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <DataContext.Provider
      value={{ 
        status:state.status,
        unit:state.unit,
        lat: state.lat,
        lon: state.lon,
        timezone: state.timezone,
        timezone_offset: state.timezone_offset,
        current: state.current,
        daily:state.daily,
        dataDispatch: dispatch,

      }}
    >
      {children}
    </DataContext.Provider>
  );
};
