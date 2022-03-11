import { useEffect, useState } from "react";
import styles from "./MoreFlights.module.css";

function MoreFlights({ setResults, results, flights, departure, destination }) {
	const [flightsPag, setFlightsPag] = useState("");

	useEffect(() => {
		fetchFlights(departure, destination);
	}, [flights]);

	const partner = "data4youcbp202106";
	const url = (departure, destination, partner) => {
		return `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&partner=${partner}`;
	};
	//fetchingflights
	const fetchFlights = async (departure, destination) => {
		const request = await fetch(url(departure, destination, partner));
		const data = await request.json();
		if (!data) console.error("data could not be fetched");
		data && setFlightsPag(data);
	};

	const moreflightsHandler = () => {
		setResults(results + 10);
	};

	if (
		flights.data.length === 500 ||
		flights.data.length >= flightsPag.data?.length ||
		!flights.data.length
	) {
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
