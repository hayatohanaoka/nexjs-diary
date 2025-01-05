import { todo } from "node:test";
import { FormDiary } from "../domain/diary";
import { DiaryPort } from "../port/diaryPort";
import { CustomResponse, DiariesResponse } from "../types";

export class DiaryGateway implements DiaryPort {
	private driver;

	constructor(driver) {
		this.driver = driver;
	}
	
	async create(diary: FormDiary): Promise<CustomResponse> {
		return await this.driver.insert(diary);
	}

	async getAll(): Promise<DiariesResponse> {
		todo();
	}
}
