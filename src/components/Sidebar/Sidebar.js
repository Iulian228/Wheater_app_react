import "./Sidebar.css"

export default function Sidebar(props) {
    return (
        <div>
        <div className="MenuMobil">
            <div className="DatosFlex">
                <p>Date Actuale</p>
                    <div className="DatosClima">
                        <p>Viteza Vântului:</p>
                        <p id="Velviento"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Umiditatea:</p>
                        <p id="Humedad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Înnorarea:</p>
                        <p id="Nubosidad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Vizibilitate:</p>
                        <p id="Visibilidad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Direcția Vântului:</p>
                        <p id="DireccionViento"></p>
                    </div>
            </div>
            <div className="HoraActual">
                <p id="Hora">{props.data}</p>
            </div>
            <div className="Copy">
                <p> Toate drepturile rezervate.(c)- Weater App</p>
            </div>
        </div>
        </div>
)}