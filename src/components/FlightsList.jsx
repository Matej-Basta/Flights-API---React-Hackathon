import { useEffect, useState } from "react";

function FlightsList() {
	const [flights, setFlights] = useState("");
	const partner = "data4youcbp202106";
	const url = `https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=${partner}`;

	useEffect(() => {
		_fetchFlights();
	}, []);

	let _fetchFlights;
	try {
		_fetchFlights = async () => {
			const request = await fetch(url);
			const data = await request.json();
			if (!data) console.error("data could not be fetched");
			data && setFlights(data);
		};
	} catch (error) {
		console.error(error);
	} finally {
		return <div>test</div>;
	}
}

export default FlightsList;
