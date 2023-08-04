import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
	return (
		<Carousel className="itemCarrusel">
		
					<Carousel.Item>
					<img 
					className="d-block w-100"
					src="../../deploy/capitana.png"
					alt="Third slide"
					/>


					<Carousel.Caption >
					<div className="textoCarrusel">					
					<h3 >Capitana Marvel</h3>
					<p className="parrafoCarrusel">
					Próximamente, nuestra heroína tendrá su propio juego.
					</p>
					</div>
					</Carousel.Caption>
				
			</Carousel.Item>
			<Carousel.Item>
				<img 
					className="d-block w-100"
					src="https://okdiario.com/img/2021/09/28/capitan-america-civil-war-marvel-disney-655x368.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<div className="textoCarrusel">	
					<h3>Juego N<sup><u>o</u></sup> 1</h3>
					<p>
						Convertite en Vengador, armá tu equipo y competí contra la computadora.
					</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100"
					src="https://cdn.suwalls.com/wallpapers/fantasy/thor-vs-loki-15080-1920x1080.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<div className="textoCarrusel">	
					<h3>Juego N<sup><u>o</u></sup> 2</h3>
					<p>
						Duelos Vengador vs. Vengador, mano a mano.
					</p>
					</div>
				</Carousel.Caption>
			</Carousel.Item>

		</Carousel>
	);
}

export default UncontrolledExample;
