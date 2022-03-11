import { useEffect, useState } from "react";
//custom components
import FlightDetails from "./FlightDetails";
import SearchFlights from "./SearchFlights";
import Loader from "./Loader";
import styles from "./FlightsList.module.css";

function FlightsList() {
	//states
	const [flights, setFlights] = useState("");

	//useful constants
	const partner = "data4youcbp202106";
	const url = (departure, destination, partner) => {
		return `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&partner=${partner}`
	};

	useEffect(() => {
		fetchFlights();
	}, []);

	//fetchingflights
	const fetchFlights = async (departure = "PRG", destination = "VLC") => {
		const request = await fetch(url(departure, destination, partner));
		const data = await request.json();
		if (!data) console.error("data could not be fetched");
		data && setFlights(data);
	};

	//todo try try...catch...finally
	if (!flights) {
		return <Loader />;
	} else {
		return (
			<>
				<SearchFlights fetchFlights={fetchFlights}/>			
				<div className={styles.flights__container}>
					{flights.data.map((flight) => {
						return (
							<div key={flight.id}>
								<FlightDetails flight={flight} />
							</div>
						);
					})}
				</div>
			</>
		);
	}
}

export default FlightsList;
