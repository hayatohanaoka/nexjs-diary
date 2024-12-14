import Form from 'next/Form';
import { Header } from "../../components/header";


export default function topPage() {
  return (
    <div>
      <Header />
      <p>日記を作成する</p>
      <Form action="/diary">
        <textarea name="diary" data-test-id="diary-main" />
        <button type="submit">作成する</button>
      </Form>
    </div>
  )
}
