"use server";

import Form from 'next/Form';
import { Header } from "../../components/header";
import { createFormSubmit } from '../../actions/formActions';
import { DateOption } from '../../components/formItems/diaryDate';
import { DiaryTitle } from '../../components/formItems/diaryTitle';
import { DiaryBody } from '../../components/formItems/diaryBody';
import { SubmitButton } from '../../components/formItems/submitButton';


export default async function createFormPage() {
  return (
    <div>
      <Header />
      <p>日記を作成する</p>
      <Form action={createFormSubmit}>
        <DateOption />
        <DiaryTitle displayLabelText="タイトル" required={true}/>
        <DiaryBody displayLabelText="本文" required={true}/>
        <SubmitButton buttonText="作成" />
      </Form>
    </div>
  )
}
