
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  collectCoverageFrom: [
    'src/components/**/*.{ts,tsx}',
  ],
  moduleNameMapper: { // for https://github.com/facebook/jest/issues/919
    "^@/assets/(.*)$": "<rootDir>/assets/$1",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  moduleDirectories: ['node_modules', __dirname],
};
