import { DateTime } from "luxon";
import Card from "../ui/Card";
import styles from "./FlightDetails.module.css";

function FlightDetails({ flight }) {
	return (
		<Card className={styles.flight__container}>
			<div>
				<div>Departing from:</div>
				<div>{flight.cityFrom}</div>
			</div>
			<div>
				<div>To:</div>
				<div>{flight.cityTo}</div>
			</div>
			<div>
				<div>Flight Duration:</div>
				<div>{flight.fly_duration}</div>
			</div>
			<div>
				<div>Departure Time:</div>
				<div>
					{DateTime.fromMillis(flight.dTime * 1000).toFormat("hh:mm")}
				</div>
			</div>
			<div>
				<div>Price:</div>
				<div>{flight.price}€</div>{" "}
				{/* Conversion euro make it dynamic to other currencies */}
			</div>
            <div>
                <button>
                    Book this flight
                </button>
            </div>
		</Card>
	);
}

export default FlightDetails;
