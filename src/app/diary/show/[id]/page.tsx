import React from "react";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { Header } from "../../../components/header";
import { Diary } from "../../../../domain/diary";
import { DiaryUseCase } from "../../../../usecase/diaryUseCase";

interface props {
	diary: Diary;
}

export const getServerSideProps = (async () => {
	const res = await DiaryUseCase.show(1);
	const diary = res.data[0];
	return {
		props: diary
	}
})

export default async function detailPage(props: props)  {
	const diary = props.diary[0];
	if (props.diary === undefined) {
		return (
			<div>
				<p>指定されたIDの日記が存在しません</p>
			</div>
		)
	}

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
