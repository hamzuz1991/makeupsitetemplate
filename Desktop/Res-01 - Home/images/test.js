function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
      var op = "TD2";
      var x= 7;
      var y =10;
      var z=10;
    var latitude =0;  
    var longitude= 0;
    var key = "1d4d4e73955189b75fef86371fbe0555";
    

    console.log(position.coords.latitude );
    latitude = position.coords.latitude ; 
    longitude = position.coords.longitude;
   $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + key, function (api) {
      console.log(api);
      $.getJSON("http://api.openweathermap.org/data/2.5/forecast?lat="+latitude + "&lon=" + longitude +"&cnt="+x+"&appid=" + key, function (apii) {
      console.log(apii);
      t=api.main.temp-273.15;
      
      tmin= api.main.temp_min -273.15;
      tmax= api.main.temp_max -273.15;
      img= api.weather[0].description;
      console.log(img);
      document.getElementById("tempo").innerHTML += `<p ><centre>${api.name}</centre> </p>`
      document.getElementById("tempo").innerHTML +=  `<p>Temprature actueill= ${Math.floor(t)} °c"</p>`
      
      document.getElementById("tempo1").innerHTML += "min="+""+Math.floor(tmin)+"°c";
      document.getElementById("tempo1").innerHTML +=`<p> max=  ${Math.floor(tmax)} °c</p>`
      document.getElementById("tempo1").innerHTML += `<p>humidite = ${api.main.humidity}</p>`
   for (let i = 0; i < apii.list.length; i++) {
      
      
        t1=apii.list[i].main.temp-273.15;
        console.log(apii.list[i].main.temp);
        t2min= apii.list[i].main.temp_min -273.15;
      t2max= apii.list[i].main.temp_max -273.15;
        document.getElementById("card").innerHTML += `  <div class="card bg-primary mr-1" >  <div class="card-body"  ><h6 class="card-title" ><p>Temprature= ${Math.floor(t1)} °c"</p></h6>
          <p class="card-text" > <br> min= ${Math.floor(t2min)}°c <br> <p> max=  ${Math.floor(t2max)} °c</p> </p> <br><p>humidite = ${apii.list[i].main.humidity}</p></div></div> `
          
      }
    
      
        
     
      if (img=="clear sky"){
      $('#01d').removeClass("d-none");
    }
    if (img=="few clouds"){
        $('#02d').removeClass("d-none");
      }
      if (img=="broken clouds"){
        $('#03d').removeClass("d-none");
      }
      if (img=="overcast clouds"){
        $('#04d').removeClass("d-none");
      }
     var time = new Date().getTime();
     console.log(apii);
     var date = new Date(time);
     console.log(time)
     document.getElementById("date").innerHTML = date.toLocaleDateString(); 
      
      
    
    });
});
  }



