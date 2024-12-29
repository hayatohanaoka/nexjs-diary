"use server";

import Form from 'next/Form';
import { Header } from "../../components/header";
import { createFormSubmit } from '../../actions/formActions';
import { DateOption } from '../../components/formItems/dateSelect';
import { DiaryTitle } from '../../components/formItems/diaryTitle';
import { DiaryBody } from '../../components/formItems/diaryBody';
import { SubmitButton } from '../../components/formItems/submitButton';


export default async function createPage() {
  return (
    <div>
      <Header />
      <p>日記を作成する</p>
      <Form action={createFormSubmit}>
        <DateOption />
        <DiaryTitle displayLabelText="タイトル" />
        <DiaryBody displayLabelText="本文" />
        <SubmitButton buttonText="作成" />
      </Form>
    </div>
  )
}
