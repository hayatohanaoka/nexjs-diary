import { CreateDiaryPort } from "../port/createDiaryPort";

export class CreateDiaryGateway implements CreateDiaryPort {
	private driver;

	constructor(driver) {
		this.driver = driver;
	}
	
	async create(diary): Promise<CustomResponse> {
		return await this.driver.insert(diary);
	}
}
