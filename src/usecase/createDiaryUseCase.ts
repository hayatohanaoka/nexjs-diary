import { CreateDiaryPort } from "../port/createDiaryPort";

export class CreateDiaryUseCase {
	private createDiaryPort: CreateDiaryPort;

	constructor(createDiaryPort: CreateDiaryPort) {
		this.createDiaryPort = createDiaryPort;
	}

	async execute(diary) {
		return this.createDiaryPort.create(diary);
	}
}
