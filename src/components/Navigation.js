import { Link } from "react-router-dom";
import NavStyles from "../css/Navigation.module.css";
function Navigation() {
	return (
		<ul className={NavStyles.navi}>
			<Link
				to="/"
				style={{ textDecoration: "none", float: "left", display: "block" }}
			>
				<li className={NavStyles.navitem}>Movie</li>
			</Link>
			<Link
				to="/coin"
				style={{ textDecoration: "none", float: "left", display: "block" }}
			>
				<li className={NavStyles.navitem}>Cataclysmic Coin Calamity</li>
			</Link>
			<Link
				to="/todo"
				style={{ textDecoration: "none", float: "left", display: "block" }}
			>
				<li className={NavStyles.navitem}>Task To Do</li>
			</Link>
		</ul>
	);
}

export default Navigation;
