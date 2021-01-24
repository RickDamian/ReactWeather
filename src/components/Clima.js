import React from "react";
import PropTypes from "prop-types";
const Clima = ({ resultado }) => {
	//extraer resultados
	const { name, main } = resultado;

	if (!name) return null;

	//Grados kelvin
	// const kelvin = 273.15;
	return (
		<div className="card-panel white col s12">
			<div className="black-text">
				<h2>El clima de {name} es: </h2>
				<p className="temperatura">
					{main.temp}
					<span> &#x2103; </span>
					{/* {parseFloat(main.temp - kelvin, 10).toFixed(2)} */}
				</p>
				<p>
					Temperatura Máxima: {main.temp_max}
					<span> &#x2103; </span>
					{/* {parseFloat(main.temp_max - kelvin, 10).toFixed(2)} */}
				</p>
				<p>
					Temperatura Minima:{main.temp_min}
					<span> &#x2103; </span>
					{/* {parseFloat(main.temp_min - kelvin, 10).toFixed(2)} */}
				</p>
			</div>
		</div>
	);
};
Clima.propTypes = {
	resultado: PropTypes.object.isRequired,
};
export default Clima;
