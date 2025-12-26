import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormOutlinedIcon from '@mui/icons-material/ThunderstormOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';




export default function WeatherInfo({info}){
  let haze_url=
  "https://images.unsplash.com/photo-1447014421976-7fec21d26d86?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGF6ZXxlbnwwfHwwfHx8MA%3D%3D"
   let cold_url=
   "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   let rain_url=
   "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
   let hot_url=
   "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    
   return(
       <div className="container">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>85
          ?rain_url:
          info.temp>15
          ?hot_url:
          cold_url

          
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <p>{info.city} <span>
          {
          info.humidity>80
          ?<ThunderstormOutlinedIcon/>:
          info.temp>20
          ?<SunnyIcon/>:
          <AcUnitOutlinedIcon/>

          
        }</span></p>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'  }}component="span">
           

            <div>TempMin={info.tempMin}&deg;C</div>
            <div>TempMix={info.tempMax}&deg;C</div>
            <div>Temp={info.temp}&deg;C</div>
            <div>Humidity={info.humidity}</div>
            <div>Feel_Like={info.feel_Like}&deg;C</div>
            <div>The can be describe as  <b>{info.description}
              </b> and Feel-Like <b>{info.feel_Like}&deg;C</b></div>
            
        </Typography>
      </CardContent>
    </Card>
       </div>
 
    )
}