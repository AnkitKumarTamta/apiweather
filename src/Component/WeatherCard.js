import React,{useEffect} from 'react'

const WeatherCard = ({AllData}) => {


    const { temp,humidity,pressure,weathermood,
        name,speed,country,sunset} = AllData;

        const sec = sunset;
        const milsec = new Date(sec*1000);
        const newdate = `${milsec.getHours()}:${milsec.getMinutes()}`;
        const [weathermod, setweathermod] = React.useState("");

        useEffect(() => {
       if(weathermood)
       {
           switch (weathermood) {
               case "Clouds":
                   setweathermod("wi-day-cloudy");
                   break;
                   case "Haze":
                   setweathermod("wi-fog");
                   break;
                   case "Clear":
                   setweathermod("wi-day-sunny");
                   break;
                   case "Mist":
                   setweathermod("wi-day-dust");
                   break;
           
               default:
                setweathermod("wi-day-sunny");
                   break;
           }
       }
        }, [weathermood])
        
  return (
    <>
    <div className='mainbox'>
        <div className='iconbox'>
        <i className={`wi ${weathermod}`}></i>
        </div>
        <div className='coudedetails'>
          <div className='detailA'>
           <div className='detail1'> <h1>{temp}&deg;</h1></div>
           <div className='detail2'> <h3>{weathermood}</h3> <p>{name}, {country}</p> </div>
          </div>
          <div className='detailB'>
           <h2> {new Date().toLocaleString()}</h2>
          </div>
        </div>
        <div className='otherdetails'>
          <div className='Other'>
            <div className='other1'><i className="wi wi-sunset"></i></div>
            <div className='other2'><p>{newdate}, Sunset</p></div>
          </div>
          <div className='Other'>
            <div className='other1'><i className="wi wi-humidity"></i></div>
            <div className='other2'><p>{humidity}, Humidiy</p></div>
          </div>
          <div className='Other'>
            <div className='other1'><i className="wi wi-snow"></i></div>
            <div className='other2'><p>{pressure}, Pressure</p></div>
          </div>
          <div className='Other'>
            <div className='other1'><i className="wi wi-cloudy-gusts"></i></div>
            <div className='other2'><p>{speed}, Wind</p></div>
          </div>
        </div>
    </div>
    </>
  )
}

export default WeatherCard