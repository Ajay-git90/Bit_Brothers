const apiKey = "688df9ebdad6c382940f9b8b5a2455c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector(".search button");
const searchBox  = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none";
    }
    else{
        var data  =  await response.json();
        console.log(data);
        
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".wind").innerHTML = data.wind.speed +"Km/hr";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        if(data.weather[0].main == "Clear"){
            weatherIcon.src =  "clear.png";
        }
         else if(data.weather[0].main == "Clouds"){
            weatherIcon.src =  "clouds.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src =  "drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src =  "mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src =  "rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src =  "snow.png";
        }
          document.querySelector(".error").style.display = "none";
         document.querySelector(".weather").style.display = "block";

    }

    
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})
checkWeather();
