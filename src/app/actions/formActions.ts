"use server";
import { createDiaryUseCase } from '../../dependencies';

export async function createFormSubmit(form: FormData) {
	return createDiaryUseCase.execute({
		title: form.get("title"),
		body: form.get("body")
	});
}
