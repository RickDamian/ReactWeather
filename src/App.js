import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Clima from "./components/Clima";
import Error from "./components/Error";

function App() {
	const [busqueda, guardarBusqueda] = useState({
		ciudad: "",
		pais: "",
	});

	const [resultado, guardarResultado] = useState({});

	const { ciudad, pais } = busqueda;
	const [consultar, guardarConsultar] = useState(false);
	const [error, guardarError] = useState(false);

	const consultarApi = async () => {
		const apiID = "5c05ff6f399778f85bfc56e4e0c8622a";
		const urlBase = "https://api.openweathermap.org/data/2.5/weather?q=";
		const url = `${urlBase}${ciudad},${pais}&appid=${apiID}&units=metric`;
		const respuesta = await fetch(url);
		const resultado = await respuesta.json();

		if (resultado.cod === "404") {
			guardarError(true);
		} else {
			guardarError(false);
		}
		guardarResultado(resultado);
	};
	useEffect(() => {
		if (consultar) {
			consultarApi();
		}
		guardarConsultar(false);
		//eslint-disable-next-line
	}, [consultar]);
	return (
		<Fragment>
			<Header titulo="Clima React"></Header>
			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col m6 s12">
							<Formulario
								busqueda={busqueda}
								guardarBusqueda={guardarBusqueda}
								guardarConsultar={guardarConsultar}
							/>
						</div>
						<div className="col m6 s12">
							{error ? (
								<Error mensaje="No Hay Resultados" />
							) : (
								<Clima resultado={resultado} />
							)}
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
