// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

const diaryMock1 = {
	id: 1, title: "固定タイトル", body: "固定本文", write_date: "2020-01-01"
}

const diaryMock2 = {
	id: 2, title: "固定タイトル2", body: "固定本文2", write_date: "2020-01-02"
}

export const handlers = [
	http.get(`${process.env.SUPABASE_ENDPOINT}/rest/v1/diary`, ({ request }) => {
		const url = new URL(request.url)
		const selectQuery = url.searchParams.get("select")
		if (selectQuery === "*") {
			return HttpResponse.json([diaryMock1, diaryMock2])
		}
	})
]
