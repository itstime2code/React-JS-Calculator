import "./main.css";

const Main = () => {
	return (
		<div className="App-main">
			<p>
				Edit <code>src/App.js</code> and save to reload.
			</p>
			<pre>
				<code className="language-css">{`body {
	font: 100% Helvetica, sans-serif;
	color: #333;
}
.box {
	-webkit-border-radius: 10px;
	-moz-border-radius: 10px;
	-ms-border-radius: 10px;
	border-radius: 10px;
}`}</code>
			</pre>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React
			</a>
		</div>
	);
};

export default Main;
