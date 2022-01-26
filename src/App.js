import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Coin from "./routes/Coin";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import ToDo from "./routes/ToDo";
function App() {
	return (
		<Router>
			<Navigation />
			<Switch>
				<Route path="/coin">
					<Coin />
				</Route>{" "}
				<Route path="/todo">
					<ToDo />
				</Route>
				<Route path="/movie/:id">
					<Detail />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
