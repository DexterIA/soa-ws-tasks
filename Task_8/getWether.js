var http = require('http');

http.get('http://freegeoip.net/json/', function (res) {
    res.on('data', function (chunk) {
        getWeather(JSON.parse(chunk.toString()).city);
    });
});

function getWeather(city) {
    var params = {
        hostname: 'api.openweathermap.org',
        path: '/data/2.5/weather?q=' + city + '&lang=ru&units=metric&APPID=e00f4ce446d074cbab7f56a658c1105e'
    };
    http.get(params, function (res) {
        res.on('data', function (chunk) {
            var data = JSON.parse(chunk.toString());
            console.log('Погода в ' + city + ':');
            console.log('Температура: ', data.main.temp);
        });
    });
}