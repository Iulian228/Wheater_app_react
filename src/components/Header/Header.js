// import './Header.scss'

export default function Header(props) {
    return (
        <div className="header">
            <div className="hd__icon">
            <i className="fas fa-bars" id="Menu">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            </i>
            </div>
            <div className="hd__location">{props.location}</div>
            <div className="hd__date">{props.date}</div>
        </div>
    )
}
