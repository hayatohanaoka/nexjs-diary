import { renderToHTML } from "next/dist/server/render";
import Form from 'next/Form';
import { Header } from "../components/header";

export default function topPage() {
  return (
    <div>
      <Header />
      <Form action="/">
        <textarea name="diary" data-test-id="diary-main" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  )
}
