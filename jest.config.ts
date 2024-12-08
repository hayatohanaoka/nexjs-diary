import type {Config} from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
    dir: './',
  })

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  testMatch: [
    "**/__test__/**/*.test.ts[,x]"
  ]
};

export default createJestConfig(config);
