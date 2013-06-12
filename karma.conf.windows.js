// Karma configuration
// Generated on Fri Mar 29 2013 12:32:24 GMT-0700 (Pacific Daylight Time)


// base path, that will be used to resolve files and exclude
basePath = '';


files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/jquery/jquery.1.9.1.min.js',
  'app/lib/angular/angular.js',
  'test/lib/angular/angular-mocks.js',
  'test/lib/flot-modified-for-karma/jquery.flot.modified-for-karma-by-MF-130427.js',
  'app/js/services/mathSkills.services.js',
  'app/js/*.js',
  'app/js/**/*.js',
  'app/data/*.js',
  'test/unit/*.js',
  'test/unit/**/*.js',
  'app/partials/**/*.html'
];


// list of files to exclude
exclude = [
  
];

preprocessors = {
    '**/app/partials/**/*.html': 'html2js'
};

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['PhantomJS'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;
