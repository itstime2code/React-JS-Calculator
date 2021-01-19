import logo from "./logo.png";
import "./header.css";

function Header(props) {
	const header = (
		<header className="App-header">
			<img className="App-logo" src={logo} alt={props.alt} />
			<span className="App-logo-text">{props.name}</span>
		</header>
	);

	return header;
}

export default Header;
