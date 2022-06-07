import './LoadingScreen.css'
import '../Header/Header'
import MainPage from "../MainPage/MainPage";
import getWeatherData from "../../API/weather/weatherAPI";

export default function LoadingScreen(props) {
    // Requesting the location permission
    navigator.geolocation.getCurrentPosition(success, error)
    // Showing on page the loader
    return(
        <div className="loader">
            <img src="./loaded.gif" className="loader-image" alt=""/>
            <p className="loader-text">Getting your location...</p>
        </div>
    )
    // If location permission allowed, it will get the coordinates in variables latitude and longitude and delete the loader
    async function success(pos) {
        const loader = document.querySelector('.loader')
        loader.remove()
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        const data = await getWeatherData(latitude, longitude);
        props.submitData(data);//here we lift up the state right into App.js
        return (
            <MainPage/>
        )
    }
    // If location permission denied, it will just delete the loader
    function error() {
        const loader = document.querySelector('.loader')
        loader.remove()
        return (
            <MainPage/>
        )
    }
}
