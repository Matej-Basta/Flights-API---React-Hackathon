import { useEffect, useState } from "react";
//custom components
import FlightDetails from "./FlightDetails";
import SearchFlights from "./SearchFlights";
import MoreFlights from "./MoreFlights";
import Loader from "./Loader";
import styles from "./FlightsList.module.css";

function FlightsList() {
	//states
	const [flights, setFlights] = useState("");
	const [results, setResults] = useState(10);

	//useful constants
	const partner = "data4youcbp202106";
	const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=${partner}&limit=${results}`;

	useEffect(() => {
		fetchFlights();
	}, [results]);

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
				<div>Displaying {flights.data.length} flights</div>
				<div className={styles.flights__container}>
					{flights.data.map((flight, i) => {
						return (
							<div key={flight.id}>
								<FlightDetails flight={flight} />
							</div>
						);
					})}
				</div>
				<MoreFlights
					setResults={setResults}
					results={results}
					flights={flights}
				/>
			</>
		);
	}
}

export default FlightsList;
