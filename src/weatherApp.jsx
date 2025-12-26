import WeatherInfo from './weatherInfo';
import App from './App.jsx'
import { useState } from 'react';
import { colors } from '@mui/material';

export default function WeatherApp(){

    const [information , setInform]=useState(
        {
        city:"Lahore",
        temp:12,
        tempMax:34,
        tempMin:14,
        feel_Like:45,
        humidity:35,
        description:"haze",
    }
    );

    let handlenewInfo=(newInfo)=>{
            setInform(newInfo)
    }
    


   return (
   < div>
   
    <App handlenewInfo={handlenewInfo}/>
    <WeatherInfo info={information}/>
    
   </div>
   )
}