import './MainPage.css'
import Header from "../Header/Header";
import Forecast from '../Forecast/Forecast';

export default function MainPage(props) {
    return (
        <div className="main">
            <Header/>
            <Forecast/>
        </div>
    )
}
