// **Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?
var searchButton = document.getElementById('searchButton')


function getApi(city) {
    // var city = document.getElementById('searchTxt').value;
    // var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=24d4927cd728b5fdfeed6b8267e0b927`;
    var requestURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=24d4927cd728b5fdfeed6b8267e0b927&units=imperial`;

    fetch(requestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        document.getElementById('cityName').textContent = data.name
        getForecast(data.coord.lat, data.coord.lon)
    });


}

function getForecast(lat, lon) {
    var requestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=24d4927cd728b5fdfeed6b8267e0b927&units=imperial`;

    fetch(requestURL)
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    for (var i = 0; i < data.list.length; i++) {
        if (data.list[i].dt_txt.includes('12:00:00')) {
            // make a card and append to front end
        }
    }
    })
}

searchButton.addEventListener('click', function () {
    var city = document.getElementById('searchTxt').value;
    // button generator with searchTxt id
    getApi(city);
});