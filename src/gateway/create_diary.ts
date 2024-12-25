import { CreateDiaryPort } from "../port/create_diary";

export class CreateDiaryGateway implements CreateDiaryPort {
	async create(diary) {
		return {status: 200, message: "未実装"};
	}
}
