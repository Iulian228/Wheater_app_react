import './Header.css'

export default function Header(props) {
    return (
        <div className="header">
            <i className="fas fa-bars" id="menu"></i>
            <div className="hd__location"></div>
            <div className="hd__icon"></div>
            <div className="hd__date"></div>
        </div>
    )
}
