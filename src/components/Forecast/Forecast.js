import "./Forecast.css"
import TodayForecast from "./TodayForecast/TodayForecast"
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast"
import getTodayWeather from "../../API/weather/weatherAPI";
import getWeatherHistory from "../../API/weather/weatherAPI";

function getTodayData(lat, long) {
    return getTodayWeather(lat, long)
        .then((result) => result)
        .catch((err) => { console.log(err); });
}

function getWeekData(lat, long) {
    let arr = [];

    for (let i = 1; i <= 7; i++) {
        const day = new Date();
        const year = day.getFullYear();
        const month = day.getMonth();
        const date = day.getDate() - i;
        const unixTime = Math.round(new Date(year, month, date) / 1000);
        getWeatherHistory(lat, long, unixTime)
        .then((result) => { arr.push(result) })
        .catch((err) => { console.log(err) });
    }

    return arr;
}

function getData(lat, long) {
    let arr = [];

    arr.push(getTodayData(lat, long));
    arr = [...getWeekData(lat, long)];

    return arr;
}

export default function Forecast(props) {
    let arr = [];
    if(props.position.latitude) {
        arr = getData(props.position.latitude, props.position.longitude);
    }
    return (
        <div className="main__forecast">
            <TodayForecast day="today" src="" degree="100" scale="c" weatherStatus="cloudy"/>
            <WeeklyForecast/>
        </div>
    )
}