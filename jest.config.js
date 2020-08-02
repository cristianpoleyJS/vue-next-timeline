module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  coverageDirectory: './coverage/',
  collectCoverage: true,
  moduleFileExtensions: [
    'js',
    'json',
    // tell Jest to handle `*.vue` files
    'vue'
  ],
  transform: {
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': 'vue-jest'
  }
}
