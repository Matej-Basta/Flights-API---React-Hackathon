function Checkbox({ setDirect, direct }) {
	return (
		<>
			<label>Direct Flights Only</label>
			<input
				id="direct"
				type="checkbox"
				label="Direct Flights Only"
				checked={direct}
				onChange={() => setDirect(!direct)}
			/>
		</>
	);
}

export default Checkbox;
