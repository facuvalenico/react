import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import { Header } from "./components/Header";
import { Inicio } from "./components/Inicio";
import { Footer } from "./components/Footer";
import { Juego } from "./components/juego/Juego";
import { PaginaJuego } from "./components/juego/PaginaJuego";
import { PaginaJuego2 } from "./components/juego/PaginaJuego2";
import { OtroJuego } from "./components/juego/OtroJuego";

function App() {
	return (
		<>
				<BrowserRouter>
					<Header />
					<Routes>
						<Route path="/" element={<Inicio />} />
						<Route path="/paginajuego" element={<PaginaJuego />} />
						<Route path="/juego" element={<Juego />} />
						<Route path="/paginajuego2" element={<PaginaJuego2 />} />
						<Route path="/otrojuego" element={<OtroJuego />} />
					</Routes>
					<Footer />
				</BrowserRouter>
		</>
	);
}

export default App;
