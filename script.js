// **Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?
var searchButton = document.getElementById('searchButton')

function getApi(city) {
    // var city = document.getElementById('searchTxt').value;
    // var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=24d4927cd728b5fdfeed6b8267e0b927`;
    var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24d4927cd728b5fdfeed6b8267e0b927&units=imperial`;

    fetch(requestURL)
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (data) {
        // console.log(data);
        // document.getElementById('cityName').textContent = data.name
        getForecast(data.coord.lat, data.coord.lon);
    });


}

function getForecast(lat, lon) {
    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=24d4927cd728b5fdfeed6b8267e0b927&units=imperial`;

    fetch(requestURL)
    .then(function (response) {
        // console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    for (var i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.includes('12:00:00')) {
            var day1text = document.getElementById('day1temp');
            var day1wind = document.getElementById('day1wind');
            var day1hum = document.getElementById('day1hum');
             day1text.textContent = (`temp: ${data.list[1].main.temp} F`);
             day1wind.textContent = (`wind: ${data.list[1].wind.speed} mph`)
             day1hum.textContent = (`humidity: ${data.list[1].main.humidity}%`);
            var day2text = document.getElementById('day2temp');
            var day2wind = document.getElementById('day2wind');
            var day2hum = document.getElementById('day2hum');
             day2text.textContent = (`temp: ${data.list[2].main.temp} F`);
             day2wind.textContent = (`wind: ${data.list[2].wind.speed} mph`)
             day2hum.textContent = (`humidity: ${data.list[2].main.humidity}%`);
            var day3text = document.getElementById('day3temp');
            var day3wind = document.getElementById('day3wind');
            var day3hum = document.getElementById('day3hum');
             day3text.textContent = (`temp: ${data.list[3].main.temp} F`);
             day3wind.textContent = (`wind: ${data.list[3].wind.speed} mph`)
             day3hum.textContent = (`humidity: ${data.list[3].main.humidity}%`);
            var day4text = document.getElementById('day4temp');
            var day4wind = document.getElementById('day4wind');
            var day4hum = document.getElementById('day4hum');
             day4text.textContent = (`temp: ${data.list[4].main.temp} F`);
             day4wind.textContent = (`wind: ${data.list[4].wind.speed} mph`)
             day4hum.textContent = (`humidity: ${data.list[4].main.humidity}%`);
            var day5text = document.getElementById('day5temp');
            var day5wind = document.getElementById('day5wind');
            var day5hum = document.getElementById('day5hum');
             day5text.textContent = (`temp: ${data.list[5].main.temp} F`);
             day5wind.textContent = (`wind: ${data.list[5].wind.speed} mph`)
             day5hum.textContent = (`humidity: ${data.list[5].main.humidity}%`);

             var icon1 = document.getElementById('card1Img');
             var icon2 = document.getElementById('card2Img');
             var icon3 = document.getElementById('card3Img');
             var icon4 = document.getElementById('card4Img');
             var icon5 = document.getElementById('card5Img');

             icon1.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`)
             icon2.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[10].weather[0].icon}@2x.png`)
             icon3.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[18].weather[0].icon}@2x.png`)
             icon4.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[26].weather[0].icon}@2x.png`)
             icon5.setAttribute('src', `https://openweathermap.org/img/wn/${data.list[34].weather[0].icon}@2x.png`)
        } else {
            var currTemp = document.getElementById('currTemp');
            var currWind = document.getElementById('currWind');
            var currHum = document.getElementById('currHum');
            currTemp.textContent = (`temp: ${data.list[0].main.temp} F`);
            currWind.textContent = (`wind: ${data.list[0].wind.speed} mph`);
            currHum.textContent = (`humidity: ${data.list[0].main.humidity}%`);
        }
        
    }
    })
}

searchButton.addEventListener('click', function () {
    var city = document.getElementById('searchTxt').value;
    getApi(city);

    getLastSearch(city);

    setLastSearch();

    
});

function setLastSearch(city) {
    var lastSearch = document.getElementById('searchTxt').value;
    localStorage.setItem('lastSearch', JSON.stringify(lastSearch));

}

function getLastSearch () {
    var lastCitySearch = JSON.parse(localStorage.getItem('lastSearch'));
    var buttonTest = document.getElementById('buttonTest');
    let createdButton = document.createElement('button');
    var buttonText = document.createTextNode(`${lastCitySearch}`);
    createdButton.appendChild(buttonText);
    buttonTest.appendChild(createdButton);

    buttonTest.addEventListener('click', function () {
        getApi(lastCitySearch);

    })
        // buttonTest.append(`<button class="last-search">${lastCitySearch.lastCity}</button>`) 

    // console.log(lastCitySearch);
}