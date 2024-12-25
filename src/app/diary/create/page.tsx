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
        <div data-test-id="diary-title">
          <label>タイトル</label>
          <input name="diary-title" />
        </div>
        <div data-test-id="diary-main">
          <label>本文</label>
          <textarea name="diary-body" />
        </div>
        <button type="submit">作成!!</button>
      </Form>
    </div>
  )
}
