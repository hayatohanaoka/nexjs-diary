interface DiaryOptionProps {
	selectedYear?: number;
	selectedMonth?: number;
	selectedDay?: number;
}

function generateOptions(start: number, end: number, selected?: number) {
	const arr: JSX.Element[] = [];
	for(let optionValue=start; optionValue<=end; optionValue++) {
		arr.push(
			selected && optionValue === selected ?
				<option value={optionValue} selected>{optionValue}</option> : <option value={optionValue}>{optionValue}</option>
		)
	}
	return arr.concat();
}

export const DateOption = (props: DiaryOptionProps) => {
	return (
		<div>
			<select name="year" data-test-id="diary-year">
        {generateOptions(2000, 2030, props.selectedYear)}
			</select>
			<label>年</label>
			<select name="month" data-test-id="diary-month">
        {generateOptions(1, 12, props.selectedMonth)}
			</select>
			<label>月</label>
			<select name="day" data-test-id="diary-day">
        {generateOptions(1, 31, props.selectedDay)}
			</select>
			<label>日</label>
		</div>
	);
}
