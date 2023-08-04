import UncontrolledExample from "./Carousel";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Inicio = () => {
	return (
			<div className="main">
				<UncontrolledExample />
				<div className="subMain">
				<h1 className="tituloIndex">JUEGOS DE PODER MARVEL </h1>
				<p className="intro">" <b>Somos fanas Marvel como vos</b>, por eso te compartimos nuestros 2 juegos. Si te parecieron divertidos, <b>hacé tu donación</b>. Con ella haremos más y mejores juegos con los Vengadores! "</p>
				<p className="heroesIndex">
				   <img className="thor" src="../../deploy/img/thor.png" alt="Hulk"></img>
				   <img className="usuarioIndex" src="../../deploy/usuario.png" alt="Botón Start Game"></img>
				   <img className="hulk" src="../../deploy/hulk.png" alt="Hulk"></img>
				</p>
				<p className="podioIndex">
				   <img className="podioImagen" src="../../deploy/marvel-comics-logo.png" alt="Marvel"></img>
				</p>
				</div>
			</div>
	);
};
