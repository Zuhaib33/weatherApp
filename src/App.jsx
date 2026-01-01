import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './App.css'
import { useState } from 'react'
import {update} from './helper'



function App({handlenewInfo}) {


  const [city , setCity]=useState("")
  const [error,setError]=useState(false)
 

   
  let API_URL="https://api.openweathermap.org/data/2.5/weather?"
  let API_KEY="7ac8ccca6046a9005bee08afbe3bd88f"

  let Weather= async()=>{
     try{
       let res=  await fetch(`${API_URL}q=${city}&appid=${API_KEY}&units=metric`);
      let jesonData= await res.json();
      console.log(jesonData)
      let weatherData={
        city:city,
        temp:jesonData.main.temp,
        tempMax:jesonData.main.temp_max,
        tempMin:jesonData.main.temp_min,
        feel_Like:jesonData.main.feels_like,
        humidity:jesonData.main.humidity,
        description:jesonData.weather[0].description,
      }
      console.log(weatherData)
      setError(false)
      return weatherData;
     }catch{
      throw error
     }
  }

  let onChange=(e)=>{
         setCity(e.target.value)
         
  }
  let handleSumbit= async(e)=>{
   try{
     e.preventDefault();
       console.log(city)
       setCity("")
      let newInfo=await Weather();
      handlenewInfo(newInfo);
     update(newInfo);
   }catch{
    setError(true)
   }
  }

  return (
    <div  id='sreachBox'>
     <form onSubmit={handleSumbit}>
        <h2>Weather App</h2>
        
        <TextField id="outlined-basic" label="City Name" variant="outlined" 
        value={city} onChange={onChange} required />
        <br /><br/>
        <Button variant="contained" type='submit' >Search</Button>
        {error && <h4 style={{color:"red"}}>NO SUCH PLACE IS FOUND</h4>}
     </form><br />

    </div>
  )
}

export default App
