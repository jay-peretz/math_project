// Karma configuration
// Generated on Tue Mar 26 2013 16:06:43 GMT-0400 (EDT)


// base path, that will be used to resolve files and exclude
basePath = '';


// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/jquery/jquery.1.9.1.min.js',
  'app/lib/angular/angular.js',
  'test/lib/angular/angular-mocks.js',
  'app/js/services/mathSkills.services.js',
  'app/js/*.js',
  'app/js/**/*.js',
  'test/unit/*.js',
  'test/unit/**/*.js',
  'app/partials/**/*.html'
];


// list of files to exclude
exclude = [
  
];

preprocessors = {
  '**/app/js/**/*.js': 'coverage',
  '**/app/partials/**/*.html': 'html2js'
};

// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['coverage'];

coverageReporter = {
  type : 'html',
  dir : 'reports/'
}

// web server port
port = process.env.PORT;
hostname = process.env.IP;


// cli runner port
runnerPort = 0;

// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


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
singleRun = true;
