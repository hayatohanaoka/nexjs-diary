import { jest } from '@jest/globals';
import { Diary } from "../../../../src/domain/diary";

export const createDiaryPortMock = jest.fn().mockImplementation(() => {
  return {
    create: (diary: Diary) => {
      return {status: 201, message: `diary is created.`};
    }
  }
})
