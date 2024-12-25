import { Diary } from "../domain/diary";

export interface CreateDiaryPort {
	create(diary: Diary): Promise<{ status: number; message: string }>;
}
