import React from "react";
import { Header } from "../../../components/header";
import { diaryUseCase } from "../../../../dependencies";
import { server } from "../../../../../e2e/mocks/show/node";
import Link from "next/link";

if (process.env.USE_E2E_MOCKS) {
	server.listen();
}

export default async function detailPage(props)  {
	const urlParams = await props.params;
	const diariesResponse = await diaryUseCase.show(urlParams.id);
	const diaries = diariesResponse.data;
	if (diaries.length === 0) {
		return (
			<div data-test-id="error-message">
				<p>指定されたIDの日記が存在しません</p>
				<Link href="/diary/show">日記一覧へ戻る</Link>
			</div>
		)
	}

	const diary = diaries[0];
	return (
		<div>
			<Header />
			<div>
				<h3 data-test-id="diary-id">Diary ID: {diary.id}</h3>
				<h3 data-test-id="diary-title">Title: {diary.title}</h3>
				<h3 data-test-id="diary-date">Write date: {diary.write_date}</h3>
				<div>
					<h3>Body: </h3>
					<h3 data-test-id="diary-body">{diary.body}</h3>
				</div>
			</div>
		</div>
	)
}
