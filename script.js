const apikey = "abe5035db1e713690ef7277d44749269";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`;

let inputSearch=document.getElementById("input-name");
let searchDOM=document.getElementById("search");

async function checkWeather(name){
    try{
        const response=await fetch(apiUrl+ `&q=${name}`+`&appid=${apikey}`);
        // const response = await fetch(apiUrl);

        var data=await response.json();
        let weatherIcon=document.querySelector(".weather-icon");

        let temperature=document.querySelector(".temp");
        let city=document.querySelector(".city");
        let humadity=document.querySelector(".humadity");
        let wind=document.querySelector(".wind");

        city.innerHTML=data.name;
        temperature.innerHTML=Math.round(data.main.temp)+"*C";
        humadity.innerHTML=data.main.humidity +"%";
        wind.innerHTML=data.wind.speed+ "km/h";

        if(data.weather[0].main=='Clouds'){
            weatherIcon.src="clouds-svgrepo-com.svg";
        }
        else if(data.weather[0].main=="clear"){
            weatherIcon.src="sun-with-face-svgrepo-com.svg";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="rain-svgrepo-com.svg";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="drizzle.svg";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="fog-svgrepo-com.svg";
        }

        document.querySelector(".weather").style.display="block";

    }catch(error){
        console.error("An error occurred:", error);
    }
}
searchDOM.addEventListener("click", () => checkWeather(inputSearch.value));


