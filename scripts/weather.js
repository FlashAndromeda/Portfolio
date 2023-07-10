const element = document.querySelector('#weather')

// Fetching the data and then jsonifying it
let data = fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=apparent_temperature_max&forecast_days=1&timezone=auto')
    .then(response => response.json())
    .then(json => updateWeather(json.daily.apparent_temperature_max[0]))
;

// Updates weather <span> element in accordance with daily precipitation sum :)
function updateWeather(temp) {
    // Defaults to nothing in case something goes wrong with the API :) 
    let textContent = ''
    console.log('Temperature in Cracow is: ' + temp + '*C');
    
    if (temp < 0) { // Below 0*C
        textContent += 'freezing';
        element.style.color = 'var(--accent2)';
    } else if (temp < 10) { // 0-10*C
        textContent += 'cold'
        element.style.color = 'var(--accent2)'; 
    } else if (temp < 20) { // 10-20*C
        textContent += 'warm';
        element.style.color = 'var(--accent1)';
    } else if (temp < 30) { // 20-30*C
        textContent += 'hot';
        element.style.color = 'var(--accent1)';
    } else if (30 < temp) { // Over 30*C
        textContent += 'scorching';
        element.style.color = 'var(--accent1)';
    };

    element.innerHTML = ' ' + textContent + ' ' + temp + '°C';
}