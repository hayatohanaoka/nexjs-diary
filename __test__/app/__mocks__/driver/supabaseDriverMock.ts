import { jest } from '@jest/globals';
import { Diary } from "../../../../src/domain/diary";

export const supabaseDriverMock = jest.fn().mockImplementation(() => {
  return {
    insert: (diary: Diary) => {
      return {status: 201, message: `diary is created.`};
    }
  }
})
