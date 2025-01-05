"use server";
import { createDiaryUseCase } from '../../dependencies';
import { Diary } from '../../domain/diary';

export async function createFormSubmit(form) {
	const diary: Diary = {
		title: form.get("title"),
		body: form.get("body"),
		write_date: `${form.get("year")}-${form.get("month")}-${form.get("day")}`
	}
	return createDiaryUseCase.execute(diary);
}
