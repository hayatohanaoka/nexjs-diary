import { todo } from "node:test";
import { ShowDiaryPort } from "../port/showDiaryPort";

export class ShowDiaryUseCase {
    private showDiaryPort: ShowDiaryPort;

    constructor(showDiaryPort: ShowDiaryPort) {
        this.showDiaryPort = showDiaryPort;
    }

    all() {
        todo();
    }
}
