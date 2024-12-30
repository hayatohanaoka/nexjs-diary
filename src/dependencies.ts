import { SupabaseDriver } from "./driver/supabaseDriver";
import { CreateDiaryGateway } from "./gateway/createDiaryGateway";
import { CreateDiaryUseCase } from "./usecase/createDiaryUseCase";

export const supabaseDriver     = new SupabaseDriver();
export const createDiaryGateway = new CreateDiaryGateway(supabaseDriver);
export const createDiaryUseCase = new CreateDiaryUseCase(createDiaryGateway);
