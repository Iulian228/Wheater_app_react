import './Header.css'
import Logo from "./img/menu.png"

export default function Header(props) {
    return (
        <div className="header">
            <img src={Logo} className="image"/>
            <div className="hd__apis">
                <p className="hd__location">location</p>
                <p className="hd__date">date</p>
            </div>
        </div>
    )
}
