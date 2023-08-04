import { Link } from "react-router-dom";

import "./PaginaJuego2.css"

export const PaginaJuego2 = () => {

	// <BrowserRouter>
	// <Header />
	// 	<Routes>
	// 		<Route path="/juego" element={<Juego />} />
	// 	</Routes>
	// </BrowserRouter

	return (
		<>
		<div className="logoMarvel">
		<p><img src="/img/logoMarvel.png" alt="Logo Marvel" width="250"></img></p>
		</div>
		<div className="imagenJuego">
		<p><img src="https://cdn.suwalls.com/wallpapers/fantasy/thor-vs-loki-15080-1920x1080.jpg" alt="Botón Start Game" width="1000"></img></p>
		</div>
		<div className="instruccionesImagen">
		<p><img src="/img/instrucciones2.png" alt="Botón Start Game" width="200"></img></p>
		</div>
		<div className="bloqueInstruccionesJ2">
		<p className="instruccionesJ2"><img src="../../../deploy/señalando.png" alt="vs." width="20"></img> La computadora te asignará 2 Vengadores al azar. Te preguntará cuál es el más fuerte antes de la contienda. 
		</p>
		<p className="instruccionesJ2"><img className="señalando" src="../../../deploy/señalando.png" alt="vs." width="25"></img> Luego hacés un click en el botón Start para ver las tarjetas de poderes.
		</p>
		<p className="instruccionesJ2"><img className="señalando" src="../../../deploy/señalando.png" alt="vs." width="25"></img> Por último, hacés otro click para saber quién es el ganador de la contienda.
		</p>
		<p className="instruccionesJ2"><img className="señalando" src="../../../deploy/señalando.png" alt="vs." width="25"></img> Un empate: debes saber, que en este caso, no hay un ganador. Por eso, luego del segundo click, este no aparecerá.
		</p>
		</div>
		<div className="equipos">
		<div>
		<h2>&nbsp;&nbsp;¡Avenger 1!</h2><br />
		<p><img src="../../../deploy/heroe_azar.png" alt="vs." width="300"></img></p>
		</div>
		<div className="versus">
		<p><button><img src="../../../deploy/versus.png" alt="vs." width="75"></img></button></p>
		</div> 
		<div>
		<h2>&nbsp;&nbsp;¡Avenger 2!</h2><br />
		<p><img src="../../../deploy/heroe_azar.png" alt="vs." width="300"></img></p>
		</div>
		</div> 
		<div className="start">
		<Link to="/paginajuego" className="link">
				<p><button><img src="../../../deploy/start.png" alt="Botón Start Game" width="125"></img></button></p>
		</Link>
		</div>

		</>
	);
};