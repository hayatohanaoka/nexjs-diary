import '@testing-library/jest-dom';
import {expect, jest, test} from '@jest/globals';

test('フォーム', () => {
  const expected = 'Hello, World!'
  const actual = 'Hello, World!'

  expect(expected).toEqual(actual)
})
