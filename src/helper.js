let body= document.querySelector("body")


let update=(newInfo)=>{
    console.log("sdfghjk")
   if(newInfo.humidity>85){
   return body.id="rain"
   }
   else if(newInfo.temp>20){
   return body.id="hot"
   }
   else{
    return body.id="cold"
   }
   
}
export{update}