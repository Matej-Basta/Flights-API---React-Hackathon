import styles from "./Loader.module.css";
import loadersvg from "../loader.svg";

function Loader() {
	return <img src={loadersvg} className={styles.loadersvg} alt="logo" />;
}

export default Loader;
