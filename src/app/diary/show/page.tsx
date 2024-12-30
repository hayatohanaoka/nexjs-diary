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
        <tbody>
          <tr>
            <th>2020-01-01</th>
            <th>固定タイトル</th>
            <th>固定本文</th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
