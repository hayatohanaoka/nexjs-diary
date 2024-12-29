interface TitleProps {
	displayLabelText: string;
}

export const DiaryTitle  = (props: TitleProps) => {
	return (
		<div data-test-id="diary-title">
			<label>{props.displayLabelText}</label>
			<input name="title" />
		</div>
	)
}
