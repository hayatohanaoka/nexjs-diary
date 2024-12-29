function generateOptions(start: number, end: number) {
	const arr: JSX.Element[] = [];
	for(let optionValue=start; optionValue<=end; optionValue++) {
		arr.push(<option value={optionValue}>{optionValue}</option>);
	}
	return arr.concat();
}

export const DateOption = () => {
	return (
		<div>
			<select name="year" data-test-id="diary-year">
        {generateOptions(2000, 2030)}
			</select>
			<label>年</label>
			<select name="month" data-test-id="diary-month">
        {generateOptions(1, 12)}
			</select>
			<label>月</label>
			<select name="day" data-test-id="diary-day">
        {generateOptions(1, 31)}
			</select>
			<label>日</label>
		</div>
	);
}
