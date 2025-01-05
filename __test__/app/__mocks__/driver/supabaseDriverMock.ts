import { jest } from '@jest/globals';
import { Diary } from "../../../../src/domain/diary";

export const supabaseDriverMock = jest.fn().mockImplementation(() => {
  return {
    insert: (diary: Diary) => {
      return {status: 201, message: `diary is created.`};
    },
    getAll: () => {
      return {
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
    }
  }
})
