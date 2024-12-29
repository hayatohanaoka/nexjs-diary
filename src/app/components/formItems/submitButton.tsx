interface SubmitButtonProps {
    buttonText: string;
}

export const SubmitButton = (props: SubmitButtonProps) => {
	return (
		<button type="submit">{props.buttonText}</button>
	)
}
