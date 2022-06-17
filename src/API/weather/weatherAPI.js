export default function getTodayWeather(latitude, longitude) {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.longitude;
            longitude = position.coords.latitude;
            /*the API provider doesn't allow users to user the API from local host,
                  so we are using this URL to act like a proxy for our API request so we can use it from local host */
            const proxy = 'https://cors-anywhere.herokuapp.com/';
            // the API key
            const apiKey = '6e35ec85966933fe78031a18b1e94845';

            //including the proxy url in the api call
            const api1 = `${proxy}api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly&appid=${apiKey}&units=metric`;
            console.log(api1)
            fetch(api1).then(response=>{
                return response.json()
            }).then(item => {
                // console.log(item)
                return item
            }).then(daily => {
                return daily
            })
        })
    }
}
