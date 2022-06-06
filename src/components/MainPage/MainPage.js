import './MainPage.css'
import Header from "../Header/Header";
import Forecast from '../Forecast/Forecast';

export default function MainPage() {
    return (
        <div className="main">
            <Header/>
            <Forecast/>
        </div>
    )
}
