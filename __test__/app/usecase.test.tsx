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
    const diary = {title: "test title", body: "test body"};
    const actual = await createDiaryUseCase.execute(diary);
    
    expect(expected).toEqual(actual);
  })
  
  test('タイトルまたは本文、もしくはその両方が空白のため、日記の新規作成に失敗する', async () => {
    const expected = { status: 400, message: `Failed to create diary.`};

    const emptyDiary = {title: "", body: ""};
    const emptyTitleDiary = {title: "", body: "test body"};
    const emptyBodyDiary = {title: "test title", body: ""};
    
    const actualEmptyDiary = await createDiaryUseCase.execute(emptyDiary);
    const actualEmptyTitle = await createDiaryUseCase.execute(emptyTitleDiary);
    const actualEmptyBody = await createDiaryUseCase.execute(emptyBodyDiary);
  
    expect(expected).toEqual(actualEmptyDiary);
    expect(expected).toEqual(actualEmptyTitle);
    expect(expected).toEqual(actualEmptyBody);
  })
})
