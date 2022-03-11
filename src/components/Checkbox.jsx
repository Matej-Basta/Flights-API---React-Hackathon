function Checkbox({ setDirect, direct }) {
	return (
		<input
			type="checkbox"
			label="Direct Flights Only"
			checked={direct}
			onChange={() => setDirect(!direct)}
		/>
	);
}

export default Checkbox;
