interface TitleProps {
	displayLabelText: string;
	required?: boolean;
	defaultInput?: string;
	readOnly?: boolean;
}

export const DiaryTitle  = (props: TitleProps) => {
	return props.readOnly ? (
		<div data-test-id="diary-title">
			<label>{props.displayLabelText}</label>
			<input name="title" type="text" required={props.required} defaultValue={props.defaultInput} readOnly/>
		</div>
	) : (
		<div data-test-id="diary-title">
			<label>{props.displayLabelText}</label>
			<input name="title" type="text" required={props.required} defaultValue={props.defaultInput}/>
		</div>
	)
}
