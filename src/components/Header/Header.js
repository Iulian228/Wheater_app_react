import './Header.css'

export default function Header(props) {
    return (
        <div className="header">
            <i className="fas fa-bars" id="menu"></i>
            <div className="hd__apis">
                <p className="hd__location">location</p>
                <p className="hd__date">date</p>
            </div>
        </div>
    )
}
