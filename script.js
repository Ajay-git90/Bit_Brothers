const apiKey = "688df9ebdad6c382940f9b8b5a2455c4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBtn = document.querySelector(".search button");
const searchBox  = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid = ${apiKey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
         document.querySelector(".weather").style.display = "none"
    }
    
}
