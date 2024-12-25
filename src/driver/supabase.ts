import { todo } from "node:test";
import { Diary } from "../domain/diary";
import { CreateDiaryPort } from "../port/create_diary";

export class SupabaseDriver {
	async insert(diary: Diary) {
		todo();
	}
}
