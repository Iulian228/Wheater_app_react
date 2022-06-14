import './Header.css'
import Logo from "./img/menu.png"
import Sidebar from '../Sidebar/Sidebar'

export default function Header(props) {
    const afterClick = () => {
        const menu = document.querySelector(".MenuMobil")
        menu.classList.toggle("fade__in")
    }
    return (
        <div className="header">
            <img onClick={afterClick} src={Logo} className="image"/>
            <div className="hd__apis">
                <p className="hd__location">location</p>
                <p className="hd__date">date</p>
            </div>
        </div>
    )
}
