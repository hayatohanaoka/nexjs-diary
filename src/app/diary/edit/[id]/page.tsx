import Link from "next/link";
import { diaryUseCase } from "../../../../dependencies";
import { DiaryBody } from "../../../components/formItems/diaryBody";
import { DateOption } from "../../../components/formItems/diaryDate";
import { DiaryTitle } from "../../../components/formItems/diaryTitle";
import { Header } from "../../../components/header";

export default async function editFormPage(props) {
	const urlParams = await props.params;
	const diariesResponse = await diaryUseCase.show(urlParams.id)
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
			<form action="/diary/create" method="post">
				<DateOption
					selectedYear={writtenDate.getFullYear()}
					selectedMonth={writtenDate.getMonth()+1}
					selectedDay={writtenDate.getDate()}
				/>
				<DiaryTitle displayLabelText="タイトル" required={true} defaultInput={diary.title}/>
				<DiaryBody displayLabelText="本文" required={true} defaultInput={diary.body}/>
				<button type="submit">送信</button>
			</form>
			<Link href="/diary/show" data-test-id="list-link">日記一覧へ戻る</Link>
		</div>
	)
}
