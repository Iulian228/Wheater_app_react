import "./toolbar.css"


export function Toolbar(props) {
    return (
        <div>
        <section className="MenuMobil">
            <div className="DatosFlex">
                <p>Datos Actuales</p>
                    <div className="DatosClima">
                        <p>Velocidad Viento:</p>
                        <p id="Velviento"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Humedad:</p>
                        <p id="Humedad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Nubosidad:</p>
                        <p id="Nubosidad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Visibilidad:</p>
                        <p id="Visibilidad"></p>
                    </div>
                    <div className="DatosClima">
                        <p>Direccion del Viento:</p>
                        <p id="DireccionViento"></p>
                    </div>
            </div>
            <div className="HoraActual">
                <p id="Hora"></p>
            </div>
            <div className="Copy">
                <p>Todos los derechos reservados(c)- Weater App</p>
            </div>
        </section>
        </div>
)}