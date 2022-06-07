import "./DailyForecast.css"

export default function DailyForecast(props) {
    return (
        <div className="main__forecast__daily-forecast">
            <img src={props.src} alt=""></img>
            <p>{props.day}</p>
            <p>{props.degree}°{props.scale}</p>
        </div>
    )
}