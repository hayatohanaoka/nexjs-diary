"use server";
import { createClient } from '@supabase/supabase-js'

export async function createFormSubmit(form: FormData) {
	const supabase = createClient(
		'https://mvyvqypjxctruxgjtunz.supabase.co',
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im12eXZxeXBqeGN0cnV4Z2p0dW56Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4ODMyMTcsImV4cCI6MjA1MDQ1OTIxN30.fBo9ufx8sGcxSZltdmtZUI8g45OVMQJbharnih2TiYg'
	)
	const { data, error } = await supabase
  .from('tbl_test')
  .insert([
		{ body: form.get("diary-body") },
  ])
  .select()
  
	console.log(data, error);
	if (error) {
		return { status:500, message: "Server error"}
	}
	return { status:201, message: `Diary is created. data ${data}`}
}
