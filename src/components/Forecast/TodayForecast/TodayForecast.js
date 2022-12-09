import "./TodayForecast.css"

export default function TodayForecast(props) {
    return (
        <div className="main__forecast__today-forecast">
            <p className="today-day">{props.day}</p>
            {/*<img src={props.src} alt="image"></img>*/}
            <img src="./animated/01d.svg" alt="image" className="actual-weather"></img>
            <p className="today-climate">{props.degree}°{props.scale}</p>
            <p className="today-status">{props.weatherStatus}</p>
        </div>
    )
}
