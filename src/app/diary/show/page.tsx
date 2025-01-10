import React from "react";
import { Header } from "../../components/header";
import { DiariesTable } from "../../components/diariesTable";
import { diaryUseCase } from "../../../dependencies";

export default async function listPage() {
  const allDiaries = await diaryUseCase.showAll();
  return (
    <div>
      <Header />
      <DiariesTable diaries={allDiaries.data} />
    </div>
  )
}
