import { jest } from '@jest/globals';
import { Diary } from "../../../../src/domain/diary";

export const supabaseDriverMock = jest.fn().mockImplementation(() => {
  return {
    insert: (diary: Diary) => {
      if (!diary.title || !diary.body) {
        return {status: 400, message: `Failed to create diary.`};
      }
      return {status: 201, message: `diary is created.`};
    }
  }
})
