import { jest } from '@jest/globals';
import { Diary } from "../../../../src/domain/diary";

export const CreateDiaryPortMock = jest.fn().mockImplementation(() => {
  return {
    create: (diary: Diary) => {
      console.log(diary);
      if (!diary.body) {
        return {status: 400, message: `Failed to create diary.`};
      }
      return {status: 201, message: `diary is created.`};
    }
  }
})
