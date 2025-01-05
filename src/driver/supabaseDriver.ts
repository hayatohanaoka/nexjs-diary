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
		
		if (response.error) {
			return { status: 500, message: "Server error"}
		}
		return { status: 201, message: `Diary is created. data ${response.data}`}
	}

	async getAll(): Promise<DiariesResponse> {
		const response = await this.supabase.from("diary").select("*");

		if (response.error) {
			return { status:500, data: []};
		}
		return {status: response.status, data: response.data};
	}
}
