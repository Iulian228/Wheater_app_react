import './MainPage.css'
import Header from "../Header/Header";
import Forecast from '../Forecast/Forecast';
import Sidebar from "../Sidebar/Sidebar";

export default function MainPage(props) {
    return (
        <div className="main">
            <Header/>
            <Sidebar/>
            <Forecast position={props.position}/>
        </div>
    )
}
