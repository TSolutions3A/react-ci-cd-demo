// Only include this if you need to override CRA's defaults
module.exports = {
  reporters: [
    'default',
    ['jest-junit', { outputDirectory: 'test-results', outputName: 'junit.xml' }],
    ['jest-html-reporter', { outputPath: 'test-results/test-report.html' }]
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text', 'html']
};