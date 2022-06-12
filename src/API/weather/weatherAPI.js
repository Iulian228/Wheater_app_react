export default function getTodayWeather(latitude, longitude) {
    const key = '30808ca93ca340a7812151958220706';
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${latitude},${longitude}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}

export function getWeatherHistory(latitude, longitude, unixTime) {
    const key = '30808ca93ca340a7812151958220706';
    const url = `http://api.weatherapi.com/v1/history.json?key=${key}&q=${latitude},${longitude}&unixdt=${unixTime}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}