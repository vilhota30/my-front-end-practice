export default {
  testEnvironment: 'jsdom',
  transform: {
      '^.+\\.jsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
      '\\.(css|scss|sass)$': 'identity-obj-proxy',
      '^@/(.*)$': '<rootDir>/src/$1',
      '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/mocks/fileMock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  coverageDirectory: "coverage",
}
