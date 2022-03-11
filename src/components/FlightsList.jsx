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
	const [destination, setDestination] = useState("VLC");
	const [departure, setDeparture] = useState("PRG");

	//useful constants
	const partner = "data4youcbp202106";
	const url = (departure, destination, partner) => {
		return `https://api.skypicker.com/flights?fly_from=${departure}&fly_to=${destination}&partner=${partner}&limit=${results}`;
	};

	useEffect(() => {
		fetchFlights(departure, destination);
	}, [results]);

	//fetchingflights
	const fetchFlights = async (departure, destination) => {
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
				<SearchFlights
					fetchFlights={fetchFlights}
					destination={destination}
					setDestination={setDestination}
					departure={departure}
					setDeparture={setDeparture}
					setResults={setResults}
				/>
				<div>Displaying {flights.data.length} flights</div>

				<div className={styles.flights__container}>
					{flights.data !== []
						? flights.data.map((flight) => {
								return (
									<div key={flight.id}>
										<FlightDetails flight={flight} />
									</div>
								);
						  })
						: null}
				</div>
				<MoreFlights
					setResults={setResults}
					results={results}
					flights={flights}
					departure={departure}
					destination={destination}
				/>
			</>
		);
	}
}

export default FlightsList;
