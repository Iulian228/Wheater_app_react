import DailyForecast from "./DailyForecast/DailyForecast"
import "./WeeklyForecast.css"

export default function WeeklyForecast(props) {
    return (
        <div className="main__forecast__weekly-forecast">
            <DailyForecast day="today" src="" degree="100" scale="c"/>
            <DailyForecast day="today" src="" degree="100" scale="c"/>
            <DailyForecast day="today" src="" degree="100" scale="c"/>
            <DailyForecast day="today" src="" degree="100" scale="c"/>
            <DailyForecast day="today" src="" degree="100" scale="c"/>
        </div>
    )
}