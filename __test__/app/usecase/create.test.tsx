import '@testing-library/jest-dom';
import {beforeEach, expect, jest, test, describe} from '@jest/globals';
import { CreateDiaryUseCase } from '../../../src/usecase/create_diary';
import { Diary } from '../../../src/domain/diary';
import { CreateDiaryPort } from '../../../src/port/create_diary';
import { createDiaryPortMock } from '../__mock__/usecase/createDiaryPortMock';

jest.mock('../../../src/gateway/create_diary');

describe("日記の新規作成", () => {
  // DI
  const createDiaryPort = new createDiaryPortMock() as CreateDiaryPort;
  const createDiaryUseCase = new CreateDiaryUseCase(createDiaryPort);

  beforeEach(() => {
    createDiaryPortMock.mockClear();
  });
  
  
  test('日記の新規作成に成功する', async () => {
    const expected = { status: 201, message: `diary is created.`};
    const diary: Diary = { body: "test"};
    const actual = await createDiaryUseCase.execute(diary);
  
    expect(expected).toEqual(actual);
  })
  
  test('日記の新規作成に失敗する', async () => {
    const expected = { status: 400, message: `Failed to create diary.`};
    const diary: Diary = { body: ""};
    const actual = await createDiaryUseCase.execute(diary);
  
    expect(expected).toEqual(actual);
  })
})
