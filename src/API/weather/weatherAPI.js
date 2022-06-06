export default async function getWeatherData(latitude, longitude) { 
    const key = '08789ab932af5d6de716da1eaa4cfca7';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}