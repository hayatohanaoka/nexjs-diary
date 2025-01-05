import '@testing-library/jest-dom';
import {beforeEach, expect, jest, test, describe} from '@jest/globals';
import { DiaryUseCase } from '../../src/usecase/diaryUseCase';
import { DiaryPort } from '../../src/port/diaryPort';
import { diaryPortMock } from './__mocks__/port/diaryPortMock';

jest.mock('../../src/port/diaryPort');

describe("アプリケーションでdiaryを使用する", () => {
  // DI
  const diaryPort = new diaryPortMock() as DiaryPort;
  const diaryUseCase = new DiaryUseCase(diaryPort);

  beforeEach(() => {
    diaryPortMock.mockClear();
  });
  
  
  test('diaryの新規作成に成功する', async () => {
    const expected = { status: 201, message: `diary is created.`};
    const diary = {id: 1, title: "test title", body: "test body", write_date: "2021-01-01"};
    const actual = await diaryUseCase.create(diary);
    
    expect(expected).toEqual(actual);
  })
  
  test('タイトルまたは本文または日付、のうちどれか一つが空白の場合、diaryの新規作成に失敗する', async () => {
    const expected = { status: 400, message: `Failed to create diary.`};

    const emptyDiary = {title: "", body: "", write_date: "2021-01-01"};
    const emptyTitleDiary = {title: "", body: "test body", write_date: "2021-01-01"};
    const emptyBodyDiary = {title: "test title", body: "", write_date: "2021-01-01"};
    const emptyDateDiary = {title: "test title", body: "testBody", write_date: ""};
    
    const actualEmptyDiary = await diaryUseCase.create(emptyDiary);
    const actualEmptyTitle = await diaryUseCase.create(emptyTitleDiary);
    const actualEmptyBody = await diaryUseCase.create(emptyBodyDiary);
    const actualEmptyDate = await diaryUseCase.create(emptyDateDiary);
  
    expect(expected).toEqual(actualEmptyDiary);
    expect(expected).toEqual(actualEmptyTitle);
    expect(expected).toEqual(actualEmptyBody);
    expect(expected).toEqual(actualEmptyDate);
  })

  test("diary一覧の閲覧に成功する", async () => {
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
    const actual = await diaryUseCase.showAll();
    expect(expectedDiariesData).toEqual(actual);
  })
})
