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
	const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=${partner}`;

	useEffect(() => {
		fetchFlights();
	}, []);

	const fetchFlights = async () => {
		const request = await fetch(url);
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
				<SearchFlights />			
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
