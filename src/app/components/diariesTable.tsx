import Link from 'next/link';
import { Diary } from '../../domain/diary';

interface TableProps {
	diaries: Diary[];
}

export const DiariesTable = (props: TableProps) => {
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
