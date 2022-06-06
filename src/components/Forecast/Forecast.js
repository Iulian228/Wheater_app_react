import "./Forecast.css"
import TodayForecast from "./TodayForecast/TodayForecast"
import WeeklyForecast from "./WeeklyForecast/WeeklyForecast"

export default function Forecast() {
    return (
        <div className="main__forecast">
            <TodayForecast day="today" src="" degree="100" scale="c" weatherStatus="ok"/>
            <WeeklyForecast/>
        </div>
    )
}