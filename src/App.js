import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//custom components
import FlightsList from "./components/FlightsList";
import Welcome from "./components/Welcome";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/flights" element={<FlightsList />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
