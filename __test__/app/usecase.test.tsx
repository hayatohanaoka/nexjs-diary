import '@testing-library/jest-dom';
import {beforeEach, expect, jest, test, describe} from '@jest/globals';
import { CreateDiaryUseCase } from '../../src/usecase/createDiaryUseCase';
import { CreateDiaryPort } from '../../src/port/createDiaryPort';
import { ShowDiaryPort } from '../../src/port/showDiaryPort';
import { createDiaryPortMock } from './__mocks__/port/createDiaryPortMock';
import { showDiaryPortMock } from './__mocks__/port/showDiaryPortMock';
import { ShowDiaryUseCase } from '../../src/usecase/showDiaryUseCase';

jest.mock('../../src/port/createDiaryPort');
jest.mock('../../src/port/showDiaryPort');

describe("日記の新規作成", () => {
  // DI
  const createDiaryPort = new createDiaryPortMock() as CreateDiaryPort;
  const createDiaryUseCase = new CreateDiaryUseCase(createDiaryPort);

  beforeEach(() => {
    createDiaryPortMock.mockClear();
  });
  
  
  test('日記の新規作成に成功する', async () => {
    const expected = { status: 201, message: `diary is created.`};
    const diary = {id: 1, title: "test title", body: "test body", write_date: "2021-01-01"};
    const actual = await createDiaryUseCase.execute(diary);
    
    expect(expected).toEqual(actual);
  })
  
  test('タイトルまたは本文または日付、のうちどれか一つが空白の場合、日記の新規作成に失敗する', async () => {
    const expected = { status: 400, message: `Failed to create diary.`};

    const emptyDiary = {id: 1, title: "", body: "", write_date: "2021-01-01"};
    const emptyTitleDiary = {id: 1, title: "", body: "test body", write_date: "2021-01-01"};
    const emptyBodyDiary = {id: 1, title: "test title", body: "", write_date: "2021-01-01"};
    const emptyDateDiary = {id: 1, title: "test title", body: "testBody", write_date: ""};
    
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

describe("日記の閲覧", () => {
  const showDiaryPort = new showDiaryPortMock() as ShowDiaryPort;
  const showDiaryUseCase = new ShowDiaryUseCase(showDiaryPort);

  beforeEach(() => {
    showDiaryPortMock.mockClear()
  })

  test("日記の閲覧に成功する", async () => {
    const expectedDiariesData = {
      data: [
        {
          "id": 1,
          "title": "test title",
          "body": "test body",
          "write_date": "2021-08-01"
        },
        {
          "id": 2,
          "title": "test title2",
          "body": "test body2",
          "write_date": "2021-08-02"
        }
      ],
      status: 200,
      statusText: "OK"
    }
    const actual = await showDiaryUseCase.all();
    expect(expectedDiariesData).toEqual(actual);
  })
})
