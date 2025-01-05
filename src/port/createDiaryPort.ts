import { Diary } from "../domain/diary";
import { CustomResponse } from "../types";

export interface CreateDiaryPort {
	create(diary: Diary): Promise<CustomResponse>;
}
