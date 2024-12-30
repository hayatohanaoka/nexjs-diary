interface TitleProps {
	displayLabelText: string;
	required?: boolean;
}

export const DiaryTitle  = (props: TitleProps) => {
	return (
		<div data-test-id="diary-title">
			<label>{props.displayLabelText}</label>
			<input name="title" required={props.required}/>
		</div>
	)
}
