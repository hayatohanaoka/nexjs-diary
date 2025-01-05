import { SupabaseEnv } from "../../env";
import { Diary } from "../domain/diary";
import { createClient } from '@supabase/supabase-js'
import { CustomResponse, DiariesResponse } from "../types";

export class SupabaseDriver {
	private supabase = createClient(SupabaseEnv.SUPABASE_ENDPOINT, SupabaseEnv.SUPABASE_TOKEN);

	async insert(diary: Diary): Promise<CustomResponse> {
		const { data, error } = await this.supabase
			.from('diary')
			.insert([
				{ title: diary.title, body: diary.body, write_date: diary.write_date },
			])
			.select()

		if (error) {
			return { status:500, message: "Server error"}
		}
		return { status:201, message: `Diary is created. data ${data}`}
	}

	async getAll(): Promise<DiariesResponse> {
		const response = await this.supabase.from("diary").select("*");
		if (response.error) {
			return { status:500, data: []};
		}
		return {status: response.status, data: response.data};
	}
}
