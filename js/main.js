var nameCity = document.querySelector('.name');
var timeCity = document.querySelector(".time");
var iconWeather = document.querySelector(".iconWeather");
var condition = document.querySelector(".condition");
var temp = document.querySelector(".temp");
var getSearch = document.querySelector(".search");
var btnSearch = document.querySelector(".submit");
var cities    =document.querySelectorAll(".cities li");
var cloud     =document.querySelector(".cloud")
var humidity     =document.querySelector(".humidity")
var  wind    =document.querySelector(".wind")

async function getCurrentWeather(city) {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=0a9cc78ffe6447dea7310607240602&q=${city}`);
    
    var weatherData=await response.json()
    
    return weatherData;
}

async function getTheNameCity(search) {
    var weatherData = await getCurrentWeather(search);
    nameCity.innerHTML = weatherData.location.name;
    temp.innerHTML = weatherData.current.temp_c + "&#176";
}

async function getTheTimeCity(search) {
    var weatherData = await getCurrentWeather(search);
    timeCity.innerHTML = weatherData.location.localtime;
}

async function getTheIconWeather(search) {
    var weatherData = await getCurrentWeather(search);
    iconWeather.setAttribute("src","https:"+weatherData.current.condition.icon)
    condition.innerHTML = weatherData.current.condition.text;
}

async function getTheWeatherDetails(search) {
    var weatherData = await getCurrentWeather(search);
    cloud.innerHTML = weatherData.current.cloud+"%";
    humidity.innerHTML = weatherData.current.humidity+"%";
    wind.innerHTML = weatherData.current.vis_km+" km/h";
}


btnSearch.addEventListener("click", async function() {
    var searchValue = getSearch.value;
       console.log(searchValue)
    await getTheNameCity(searchValue);
    await getTheTimeCity(searchValue);
    await getTheIconWeather(searchValue);
    await getTheWeatherDetails(searchValue);

});


// get the cities


    for(var i=0 ;i<cities.length;i++){
        cities[i].addEventListener("click",async function(e){
            cityName= e.target.innerHTML;
            console.log(cityName)
            await getTheNameCity(cityName);
            await getTheTimeCity(cityName);
            await getTheIconWeather(cityName);
            await getTheWeatherDetails(cityName);
         })
    }
