import { Diary } from "./domain/diary";

interface CustomResponse {
    status: number;
    message: string;
}

interface DiariesResponse {
    status: number;
    data: Diary[];
}
