"use server";
import { diaryUseCase } from '../../dependencies';
import { FormDiary } from '../../domain/diary';

export async function createFormSubmit(form) {
	const diary: FormDiary = {
		title: form.get("title"),
		body: form.get("body"),
		write_date: `${form.get("year")}-${form.get("month")}-${form.get("day")}`
	}
	return diaryUseCase.create(diary);
}
