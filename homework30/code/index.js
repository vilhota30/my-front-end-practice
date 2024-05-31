const body = document.querySelector("body");

function spinnerStart() {
    body.classList.add('loading');
  }

function spinnerStop() {
    window.setTimeout(function () {
      body.classList.remove('loading');
      body.classList.add('loaded');
    }, 1000);
}

document.getElementById('weatherForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var city = document.getElementById('city').value;
    fetchWeatherData(city);
});

document.querySelector('.update-btn').addEventListener('click', function() {
    var city = document.getElementById('city').value;
    fetchWeatherData(city);
});

function fetchWeatherData(city) {
    spinnerStart();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a49f8eafc69a559e809494621c83a506`)
    .then(response => response.json())
    .then(data => {
        const weatherData = data.weather[0];
        const mainData = data.main;
        const windData = data.wind;
        const sysData = data.sys;

        const weatherInfoContainer = document.createElement('div');
        weatherInfoContainer.classList.add('weatherContainer');

        const cityName = document.createElement('h2');
        cityName.textContent = `City: ${data.name}, ${sysData.country}`;

        const temperature = document.createElement('p');
        temperature.textContent = `Temperature: ${Math.round(mainData.temp - 273.15)}°C`;

        const weatherDescription = document.createElement('p');
        weatherDescription.textContent = `Weather: ${weatherData.description}`;

        const feelsLike = document.createElement('p');
        feelsLike.textContent = `Feels Like: ${Math.round(mainData.feels_like - 273.15)}°C`;

        const clouds = document.createElement('p');
        clouds.textContent = `Clouds: ${data.clouds.all}%`;

        const pressure = document.createElement('p');
        pressure.textContent = `Pressure: ${mainData.pressure} hPa`;

        const humidity = document.createElement('p');
        humidity.textContent = `Humidity: ${mainData.humidity}%`;

        const windSpeed = document.createElement('p');
        windSpeed.textContent = `Wind Speed: ${windData.speed} m/s`;

        weatherInfoContainer.appendChild(cityName);
        weatherInfoContainer.appendChild(temperature);
        weatherInfoContainer.appendChild(weatherDescription);
        weatherInfoContainer.appendChild(feelsLike);
        weatherInfoContainer.appendChild(clouds);
        weatherInfoContainer.appendChild(pressure);
        weatherInfoContainer.appendChild(humidity);
        weatherInfoContainer.appendChild(windSpeed);

        spinnerStop();
        
        const infoGroup = document.querySelector('.info-group');
        infoGroup.innerHTML = '';
        infoGroup.appendChild(weatherInfoContainer);
    })
    .catch(error => console.error('Error fetching data:', error));
}
