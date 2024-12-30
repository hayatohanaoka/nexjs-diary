import { Diary } from "../domain/diary";
import { CreateDiaryPort } from "../port/createDiaryPort";

export class CreateDiaryUseCase {
	private createDiaryPort: CreateDiaryPort;

	constructor(createDiaryPort: CreateDiaryPort) {
		this.createDiaryPort = createDiaryPort;
	}

	async execute(diary: Diary): Promise<CustomResponse> {
		if (this.validate(diary)) {
			return { status: 400, message: `Failed to create diary.` };
		}
		return this.createDiaryPort.create(diary);
	}

	validate(diary: Diary): boolean {
		return (diary.title === "" || diary.body === "" || diary.writeDateString === "") ? true : false
	}
}
