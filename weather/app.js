
 function myFunction()
 {
   console.log("----- Check Your City Wheather------") ; 
 }
 
 function wheathercity()
 {
   var city_name=document.getElementById("city").value;
  
   if(city_name == "")
 {
     alert("Enter details");
     console.log("---Enter Your City Name---");
 }
 else{
   console.log("---Details-----"+ city_name); 
   var xhttp = new XMLHttpRequest();
   xhttp.open("GET", "http://api.apixu.com/v1/current.json?key=da949b6432fe46c2bfa160158191501&q="+city_name,true);
   xhttp.send(null);
   xhttp.onreadystatechange = function(data) {
     if (this.readyState == 4 && this.status == 200) {
         console.log("-----------Data-------"+ this.response);
         var p=this.responseText;
         
        
         document.getElementById("demo").innerHTML=p;
         console.log("Information----"+p);
         var r=JSON.parse(xhttp.response);
         var location = "<b> Current Location:  </b>" +r.location.name+" "+r.location.region+"</br>";
         var temperaturec = "<b> Temperature In C : </b>"+r.current.temp_c+" C";
         var temperatureF = "<b> Temperature In F : </b>"+r.current.temp_f+" F";
         var icon1 = "<b> Icon </b>"+r.current.condition.icon;
         document.getElementById("demo").innerHTML=location;
         document.getElementById("demo1").innerHTML= temperaturec + " "+temperatureF+ " Last Updated :"+r.current.last_updated;
         document.getElementById("wind").innerHTML="<b> Wind :   </b>"+r.current.wind_mph+" mph "+ r.current.wind_kph+" Km/h";
         document.getElementById("humidity").innerHTML="<b> Humidity : </b>"+r.current.humidity+ "%";
         
        
        
     // console.log(this.responseText);
     }
   };
   
 }
 }