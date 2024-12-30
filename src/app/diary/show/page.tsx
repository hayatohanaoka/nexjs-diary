import { Header } from "../../components/header";


export default function topPage() {
  return (
    <div>
      <Header />
      <table>
        <thead>
          <tr>
            <th>日付</th>
            <th>タイトル</th>
            <th>本文</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  )
}
