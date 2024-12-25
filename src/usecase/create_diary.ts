import { CreateDiaryPort } from "../port/create_diary";

export class CreateDiaryUseCase {
	private createDiaryPort: CreateDiaryPort;

	constructor(createDiaryPort: CreateDiaryPort) {
		this.createDiaryPort = createDiaryPort;
	}

	async execute(diary) {
		return this.createDiaryPort.create(diary);
	}
}
