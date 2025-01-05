import { DiariesResponse } from "../types";

export interface ShowDiaryPort {
    all(): Promise<DiariesResponse>;
}
