"use server";

export async function createFormSubmit(form: FormData) {
	// TODO: create Usecase Port Gateway
	const response = await fetch('/', {
		method: 'POST',
		body: form.get("diary"),
	})

	const data = await response.json()
	return data;
}
