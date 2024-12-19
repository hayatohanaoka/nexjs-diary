"use server";

import Form from 'next/Form';
import { Header } from "../../components/header";
import { createFormSubmit } from '../../actions/formActions';


export default async function createPage() {
  return (
    <div>
      <Header />
      <p>日記を作成する</p>
      <Form action={createFormSubmit}>
        <textarea name="diary" data-test-id="diary-main" />
        <button type="submit">作成!!</button>
      </Form>
    </div>
  )
}
