import React from "react";
import { Header } from "../../components/header";
import { DiariesTable } from "../../components/diariesTable";
import { diaryUseCase } from "../../../dependencies";
import { diariesMock } from "../../../../e2e/mocks/diaryMock";

export default async function topPage() {
  const allDiaries = process.env.E2E_MOCK ? diariesMock : await diaryUseCase.showAll();
  return (
    <div>
      <Header />
      <DiariesTable diaries={allDiaries.data} />
    </div>
  )
}
