
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'jest-expo',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [],
  moduleDirectories: ['node_modules', __dirname],
  moduleNameMapper: {
    '@components/(.*)': '<rootDir>/src/components/$1',
  },
};
