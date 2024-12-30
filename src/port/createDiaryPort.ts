import { Diary } from "../domain/diary";

export interface CreateDiaryPort {
	create(diary: Diary): Promise<CustomResponse>;
}
