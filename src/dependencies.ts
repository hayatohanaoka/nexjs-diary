import { SupabaseDriver } from "./driver/supabaseDriver";
import { DiaryGateway } from "./gateway/diaryGateway";
import { DiaryUseCase } from "./usecase/diaryUseCase";

export const supabaseDriver = new SupabaseDriver();
export const diaryGateway   = new DiaryGateway(supabaseDriver);
export const diaryUseCase   = new DiaryUseCase(diaryGateway);
