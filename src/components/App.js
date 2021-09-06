import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { TrelloBoard } from "./TrelloBoard";
import "../App.css";
import Navbar from "./Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Router>
				<Route path="/" component={TrelloBoard} />
			</Router>
		</>
	);
}

export default App;
