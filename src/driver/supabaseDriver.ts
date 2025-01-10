import { Diary } from "../domain/diary";
import { createClient } from '@supabase/supabase-js'
import { CustomResponse, DiariesResponse } from "../types";

export class SupabaseDriver {
	private supabase = createClient(process.env.SUPABASE_ENDPOINT, process.env.SUPABASE_TOKEN);
	
	async insert(diary: Diary): Promise<CustomResponse> {
		const response = await this.supabase
			.from('diary')
			.insert([
				{ title: diary.title, body: diary.body, write_date: diary.write_date },
			])
			.select()
		return response.error ? { status: 500, message: "Server error"} : { status: 201, message: `Diary is created. data ${response.data}`}
	}

	async getAll(): Promise<DiariesResponse> {
		const response = await this.supabase.from("diary").select("*");
		return response.error ? { status: 500, data: [] } : { status: response.status, data: response.data };
	}

	async get(diaryId: number) {
		const response = await this.supabase.from("diary").select("*").eq("id", diaryId);
		return response.error ? { status: 500, data: [] } : { status: response.status, data: response.data };
	}
}
