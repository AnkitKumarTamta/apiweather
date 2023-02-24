import React,{useState,useEffect} from 'react'
import '../style.css';
import WeatherCard from './WeatherCard';

const Weather = () => {
  const [searchValue, setsearchValue] = useState("pune");
  const [AllData, setAllData] = useState({});
  const getTheData = async ()=>{
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=6008ee2877b5d1f3d6a4015d06831682`
      const res = await fetch(url);
      const data = await res.json();
      const {temp,humidity,pressure} = data.main;
      const {main: weathermood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;

      const ApiSeNikalaData = {
        temp,humidity,pressure,weathermood,
        name,speed,country,sunset
      }
      
      setAllData(ApiSeNikalaData);
    
    } catch (error) {
      console.log(error)
    }
    setsearchValue("");
  };

  useEffect(() => {
  getTheData();
  }, [])
  
  return (
    <>
    <div className='searchdiv'>
        <div className='search'>
            <input type="text"  placeholder='Search...' value={searchValue} onChange={(e)=>setsearchValue(e.target.value)} />
        </div>
        <button onClick={getTheData}>Search</button>
    </div>

    <WeatherCard AllData={AllData}/>
    </>
  )
}

export default Weather