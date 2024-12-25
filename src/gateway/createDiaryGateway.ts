import { CreateDiaryPort } from "../port/createDiaryPort";

export class CreateDiaryGateway implements CreateDiaryPort {
	private driver;

	constructor(driver) {
		this.driver = driver;
	}
	
	async create(diary) {
		return await this.driver.insert(diary);
	}
}
