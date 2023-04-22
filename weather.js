const element = document.querySelector('#weather')

// Fetching the data and then jsonifying it
let data = fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max,rain_sum&forecast_days=1&timezone=auto')
    .then(response => response.json())
    .then(json => updateWeather(json.daily.rain_sum[0], json.daily.apparent_temperature_max[0]))
;

// Updates weather <span> element in accordance with daily precipitation sum :)
function updateWeather(rain, temp) {
    // Defaults to nothing in case something goes wrong with the API :) 
    let textContent = ''

    if (rain < 5) {
        textContent += 'sunny';
        element.style.color = 'var(--accent1)';
    } else if (5 < rain) {
        textContent += 'rainy';
        element.style.color = 'var(--accent2)';
    };

    element.innerHTML = ' ' + textContent + ' ' + temp + '°C';
}