import { FormDiary } from "../domain/diary";
import { CustomResponse, DiariesResponse } from "../types";

export interface DiaryPort {
    create(diary: FormDiary): Promise<CustomResponse>;
    getAll(): Promise<DiariesResponse>;
    get(diaryId: number): Promise<DiariesResponse>;
}
