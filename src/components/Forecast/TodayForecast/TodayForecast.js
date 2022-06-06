import "./TodayForecast.css"

export default function TodayForecast(props) {
    return (
        <div className="main__forecast__today-forecast">
            <p>{props.day}</p>
            <img src={props.src} alt=""></img>
            <p>{props.degree}°{props.scale}</p>
            <p>{props.weatherStatus}</p>
        </div>
    )
}