import { SupabaseEnv } from "../../env";
import { Diary } from "../domain/diary";
import { createClient } from '@supabase/supabase-js'

export class SupabaseDriver {
	async insert(diary: Diary): Promise<CustomResponse> {
		const supabase = createClient(SupabaseEnv.SUPABASE_ENDPOINT, SupabaseEnv.SUPABASE_TOKEN)
		const { data, error } = await supabase
			.from('diary')
			.insert([
				{ title: diary.title, body: diary.body, write_date: diary.writeDateString },
			])
			.select()

		if (error) {
			return { status:500, message: "Server error"}
		}
		return { status:201, message: `Diary is created. data ${data}`}
	}
}
