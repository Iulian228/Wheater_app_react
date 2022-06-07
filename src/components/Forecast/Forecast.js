import "./Forecast.css"
import TodayForecast from "./TodayForecast/TodayForecast"
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast"
import getWeatherData from "../../API/weather/weatherAPI";
export default function Forecast(props) {
    const data = [];
    if(props.position.latitude){
        for (let i = 0; i < 5; i++) {
            const day = new Date();
            const year = day.getFullYear();
            const month = day.getMonth();
            const date = day.getDate() - i;
            const unixTime = Math.round(new Date(year, month, date) / 1000);
    
            getWeatherData(props.position.latitude, props.position.longitude, unixTime)
            .then((result) => {
                data.push(result);
            }).catch((err) => {
                console.log(err);
            });
        }
        console.log(data);
    }
    return (
        <div className="main__forecast">
            <TodayForecast day="Today" src="" degree="100" scale="c" weatherStatus="ok"/>
            <WeeklyForecast/>
        </div>
    )
}