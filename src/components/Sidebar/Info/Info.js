export default function Info(props) {
    return (
            <div className="DatosFlex">
                <p>Date Actuale</p>
                    <div className="DatosClima">
                        <p>Viteza Vântului:</p>
                        <p id="Velviento">exemplu viteza vantului</p>
                    </div>
                    <div className="DatosClima">
                        <p>Umiditatea:</p>
                        <p id="Humedad">Umed</p>
                    </div>
                    <div className="DatosClima">
                        <p>Înnorarea:</p>
                        <p id="Nubosidad">exemplu innorarea</p>
                    </div>
                    <div className="DatosClima">
                        <p>Vizibilitate:</p>
                        <p id="Visibilidad">exeplu vizibilitate</p>
                    </div>
                    <div className="DatosClima">
                        <p>Direcția Vântului:</p>
                        <p id="DireccionViento">exemplu directia vantului</p>
                    </div>
            </div>
    )
}           