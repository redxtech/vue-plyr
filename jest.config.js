module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest'
  }
}
