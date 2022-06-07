export default async function getWeatherData(latitude, longitude, unixTime) { 
    const key = '08789ab932af5d6de716da1eaa4cfca7';
    const url = unixTime ? `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${unixTime}&appid=${key}` :`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}