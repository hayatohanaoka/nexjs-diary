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
		const idQuery = url.searchParams.get("id");
		console.log(idQuery);
		
		if (!idQuery) {
			return HttpResponse.json([diaryMock1, diaryMock2])
		}

		if (idQuery.match("eq.1")) {
			return HttpResponse.json([diaryMock1])
		} else if (idQuery.match("eq.2")) {
			return HttpResponse.json([diaryMock2])
		} else {
			return HttpResponse.json([])
		}
	
	})
]
