interface BodyProps {
	displayLabelText: string;
}

export const DiaryBody = (props: BodyProps) => {
	return (
		<div data-test-id="diary-main">
			<label>{props.displayLabelText}</label>
			<textarea name="body" />
		</div>
	);
}
