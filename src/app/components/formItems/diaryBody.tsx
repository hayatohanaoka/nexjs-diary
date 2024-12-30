interface BodyProps {
	displayLabelText: string;
	required?: boolean;
}

export const DiaryBody = (props: BodyProps) => {
	return (
		<div data-test-id="diary-main">
			<label>{props.displayLabelText}</label>
			<textarea name="body" required={props.required}/>
		</div>
	);
}
