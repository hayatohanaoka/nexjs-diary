interface BodyProps {
	displayLabelText: string;
	required?: boolean;
	defaultInput?: string;
	readOnly?: boolean;
}

export const DiaryBody = (props: BodyProps) => {
	return props.readOnly ? (
		<div data-test-id="diary-main">
			<label>{props.displayLabelText}</label>
			<textarea name="body" required={props.required} defaultValue={props.defaultInput} readOnly/>
		</div>
	) : (
		<div data-test-id="diary-main">
			<label>{props.displayLabelText}</label>
			<textarea name="body" required={props.required} defaultValue={props.defaultInput}/>
		</div>
	)
}
