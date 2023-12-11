const apiKey = '9d6a205675ebb266af38cc246d48d5a4';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const input = document.querySelector('input');
const search = document.querySelector('button');
const imgPic = document.querySelector('.weather-img');

async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(res.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.display-box').style.display='none';
    } else {

        let data = await res.json();
   
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '℃';
        document.querySelector('.humi').innerHTML = data.main.humidity + " %";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
        if(data.weather[0].main == 'Clouds'){
        imgPic.src = "images/clouds.png";
        } else if(data.weather[0].main == 'Clear'){
            imgPic.src = "images/clear.png";
        }
        else if(data.weather[0].main == 'Drizzle'){
            imgPic.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == 'Snow'){
            imgPic.src = "images/snow.png";
        }
        else if(data.weather[0].main == 'Rain'){
            imgPic.src = "images/rain.png";
        }
        else if(data.weather[0].main == 'Mist'){
            imgPic.src = "images/mist.png";
        }
        document.querySelector('.display-box').style.display='block';
        document.querySelector('.error').style.display = 'none';
        }
    
}

search.addEventListener('click', ()=>{
    console.log('Search button clicked')
    checkWeather(input.value);
    input.value='';
})
