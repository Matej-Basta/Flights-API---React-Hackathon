import styles from "./MoreFlights.module.css";

function MoreFlights({ setResults, results, flights }) {
	const moreflightsHandler = () => {
		setResults(results + 10);
	};
	if (flights.data.length === 500 || !flights.data.length) {
		return <></>;
	} else {
		return (
			<div className={styles.more__flights}>
				<button
					onClick={moreflightsHandler}
					className={styles.more__flights_button}
				>
					Show more flights
				</button>
			</div>
		);
	}
}

export default MoreFlights;
