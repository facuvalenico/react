import { Link } from "react-router-dom";

import "./PaginaJuego.css"

export const PaginaJuego = () => {

	// <BrowserRouter>
	// <Header />
	// 	<Routes>
	// 		<Route path="/juego" element={<Juego />} />
	// 	</Routes>
	// </BrowserRouter>

	return (
		<>
		<div className="logoMarvel">
		<p><img src="../../../deploy/logoMarvel.png" alt="Logo Marvel" width="250"></img></p>
		</div>
		<div className="imagenJuego">
		<p><img src="../../../deploy/imagenJuego.png" alt="Botón Start Game" width="1000"></img></p>
		</div>
		<div className="instrucciones">
		<a href="juego">
		<p><img src="../../../deploy/instrucciones.png" alt="Botón Start Game" width="200"></img></p>
		</a>
		</div>
		<div className="equipos">
		<div>
		<h2>&nbsp;&nbsp;¡Tu equipo!</h2><br />
		<p><img src="../../../deploy/heroe_usuarioTJ.png" alt="Héroe" width="200"></img></p>
		<p><img src="../../../deploy/ironman_TJ.png" alt="Iron Man" width="200"></img></p>
		<p><img src="../../../deploy/thor_TJ.png" alt="Thor" width="200"></img></p>
		</div>
		<div className="versus">
		<p><button><img src="../../../deploy/versus.png" alt="vs." width="150"></img></button></p>
		</div> 
		<div>
		<h2>&nbsp;&nbsp;¡El nuestro!</h2><br />
		<p><img src="../../../deploy/heroe_azar.png" alt="vs." width="200"></img></p>
		<p><img src="../../../deploy/heroe_azar.png" alt="vs." width="200"></img></p>
		<p><img src="../../../deploy/heroe_azar.png" alt="vs." width="200"></img></p>
		</div>
		</div> 
		<div className="start">
		<Link to="/juego" className="link">
			<p><button><img src="../../../deploy/start.png" alt="Botón Start Game" width="125"></img></button></p>
		</Link>
		</div>

		</>
	);
};