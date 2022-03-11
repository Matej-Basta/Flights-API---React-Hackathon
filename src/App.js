import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
//custom components
import FlightsList from "./components/FlightsList";

function App() {

	return (
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<FlightsList />} />
			</Routes>
		</BrowserRouter>
	</>	
	);
}

export default App;
