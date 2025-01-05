import Link from 'next/link';
import { Diary } from '../../domain/diary';
import { server } from '../../../e2e/mocks/show/node';

interface TableProps {
	diaries: Diary[];
}

if (process.env.USE_E2E_MOCKS) {
	server.listen();
}

export const DiariesTable = (props: TableProps) => {
	if (props.diaries.length) {
		return (
				<table>
					<thead>
						<tr>
							<th>作成順</th>
							<th>日付</th>
							<th>タイトル</th>
							<th>本文</th>
						</tr>
					</thead>
					<tbody>
						{props.diaries.map((diary: Diary, index) => {
							return (
								<tr>
									<th>
										<Link href={`show/${diary.id}`} target='blank' data-test-id="diary-detail-link">{index + 1}</Link>
									</th>
									<th>{diary.write_date}</th>
									<th>{diary.title}</th>
									<th>{diary.body}</th>
								</tr>
							)}
						)}
					</tbody>
				</table>
		)
	}
	return (
		<div>
			<div>作成された日記がありません。</div>
			<Link href="/diary/create">日記を作成する</Link>
		</div>
	)
}
