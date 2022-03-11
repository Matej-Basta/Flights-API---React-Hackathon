import { Link } from "react-router-dom";
import styles from "./Welcome.module.css";

function Welcome() {
	return (
		<div className={styles.container}>
			<h1>Book your next flight</h1>
			<Link to={"/flights"} className={styles.access__button}>
				Access
			</Link>
		</div>
	);
}

export default Welcome;
