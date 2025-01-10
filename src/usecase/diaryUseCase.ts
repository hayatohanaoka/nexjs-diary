import { todo } from "node:test";
import { FormDiary } from "../domain/diary";
import { DiaryPort } from "../port/diaryPort";
import { CustomResponse, DiariesResponse } from "../types";

export class DiaryUseCase {
	private diaryPort: DiaryPort;

	constructor(diaryPort: DiaryPort) {
		this.diaryPort = diaryPort;
	}

	async create(diary: FormDiary): Promise<CustomResponse> {
		if (this.validateFormDiary(diary)) {
			return { status: 400, message: `Failed to create diary.` };
		}
		return this.diaryPort.create(diary);
	}

	async showAll(): Promise<DiariesResponse> {
		return this.diaryPort.getAll();
	}

	async show(diaryId: number): Promise<DiariesResponse> {
		return await this.diaryPort.get(diaryId);
	}

	validateFormDiary(diary: FormDiary): boolean {
		return (diary.title === "" || diary.body === "" || diary.write_date === "") ? true : false
	}
}
