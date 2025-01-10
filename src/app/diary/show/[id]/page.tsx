import React from "react";
import { Header } from "../../../components/header";
import { diaryUseCase } from "../../../../dependencies";
import { server } from "../../../../../e2e/mocks/show/node";
import Link from "next/link";
import { DiaryTitle } from "../../../components/formItems/diaryTitle";
import { DiaryBody } from "../../../components/formItems/diaryBody";
import { DateOption } from "../../../components/formItems/diaryDate";

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
	const writtenDate = new Date(diary.write_date);
	return (
		<div>
			<Header />
			<div>
				<p data-test-id="written-date">{`${writtenDate.getFullYear()}年${writtenDate.getMonth()+1}月${writtenDate.getDate()}日`}</p>
				<DiaryTitle displayLabelText="タイトル" required={true} defaultInput={diary.title} readOnly/>
				<DiaryBody displayLabelText="本文" required={true} defaultInput={diary.body} readOnly/>
				<button type="submit">送信</button>
			</div>
			<Link href={`/diary/edit/${urlParams.id}`} data-test-id="edit-link">日記を編集する</Link>
			<Link href="/diary/show" data-test-id="list-link">日記一覧へ戻る</Link>
		</div>
	)
}
