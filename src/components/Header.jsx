import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
	
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="link">
						<img src="../deploy/marvel-comics-logo.png" alt="Logo de Marvel" width="100"></img>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="nav-links">
						<Link to="/" className="link">
							Inicio
						</Link>
						<Link to="/paginajuego" className="link">
							Juego N<sup><u>o</u></sup> 1
						</Link>
						<Link to="/paginajuego2" className="link">
							Juego N<sup><u>o</u></sup> 2
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
