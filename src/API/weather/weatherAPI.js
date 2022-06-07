export default async function getTodayWeather(latitude, longitude) { 
    const key = '8f7b410da764911d6dc7b08cc5d84675';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}

export default async function get5DaysWeather(latitude, longitude) {
    const key = '8f7b410da764911d6dc7b08cc5d84675';
    const url = `api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}`;

    return fetch(url)
                .then((result) => result.json())
                .catch((err) => { console.log(err) });
}