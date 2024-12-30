import '@testing-library/jest-dom';
import {beforeEach, expect, jest, test, describe} from '@jest/globals';
import { CreateDiaryUseCase } from '../../src/usecase/createDiaryUseCase';
import { CreateDiaryPort } from '../../src/port/createDiaryPort';
import { createDiaryPortMock } from './__mocks__/port/createDiaryPortMock';

jest.mock('../../src/port/createDiaryPort');

describe("日記の新規作成", () => {
  // DI
  const createDiaryPort = new createDiaryPortMock() as CreateDiaryPort;
  const createDiaryUseCase = new CreateDiaryUseCase(createDiaryPort);

  beforeEach(() => {
    createDiaryPortMock.mockClear();
  });
  
  
  test('日記の新規作成に成功する', async () => {
    const expected = { status: 201, message: `diary is created.`};
    const diary = {title: "test title", body: "test body", writeDateString: "2021-01-01"};
    const actual = await createDiaryUseCase.execute(diary);
    
    expect(expected).toEqual(actual);
  })
  
  test('タイトルまたは本文または日付、のうちどれか一つが空白の場合、日記の新規作成に失敗する', async () => {
    const expected = { status: 400, message: `Failed to create diary.`};

    const emptyDiary = {title: "", body: "", writeDateString: "2021-01-01"};
    const emptyTitleDiary = {title: "", body: "test body", writeDateString: "2021-01-01"};
    const emptyBodyDiary = {title: "test title", body: "", writeDateString: "2021-01-01"};
    const emptyDateDiary = {title: "test title", body: "testBody", writeDateString: ""};
    
    const actualEmptyDiary = await createDiaryUseCase.execute(emptyDiary);
    const actualEmptyTitle = await createDiaryUseCase.execute(emptyTitleDiary);
    const actualEmptyBody = await createDiaryUseCase.execute(emptyBodyDiary);
    const actualEmptyDate = await createDiaryUseCase.execute(emptyDateDiary);
  
    expect(expected).toEqual(actualEmptyDiary);
    expect(expected).toEqual(actualEmptyTitle);
    expect(expected).toEqual(actualEmptyBody);
    expect(expected).toEqual(actualEmptyDate);
  })
})
