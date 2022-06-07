import './LoadingScreen.css'
import '../Header/Header'
import MainPage from "../MainPage/MainPage";
import { useState } from 'react';

export default function LoadingScreen(props) {
    // Requesting the location permission
    const [requested, setRequest] = useState(false);
    if(!requested){
        navigator.geolocation.getCurrentPosition(success, error);
        setRequest(true);
    }
    // Showing on page the loader
    return(
        <div className="loader">
            <img src="./loaded.gif" className="loader-image" alt=""/>
            <p className="loader-text">Getting your location...</p>
        </div>
    )
    // If location permission allowed, it will get the coordinates in variables latitude and longitude and delete the loader
    function success(pos) {
        const loader = document.querySelector('.loader');
        loader.remove();
        const position = {
            latitude: pos.coords.latitude,
            longitude: pos.coords.longitude
        };
        props.submitPosition(position);//lift up the position to App.js
        return (
            <MainPage/>
        )
    }
    // If location permission denied, it will just delete the loader
    function error() {
        const loader = document.querySelector('.loader');
        loader.remove();
        return (
            <MainPage/>
        )
    }
}
