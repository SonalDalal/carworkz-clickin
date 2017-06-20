//Steps to get execution report in HTML format
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
	dest: 'target/screenshots',
  	filename: 'Report.html',
  	reportTitle: 'Execution Report',
  	showSummary: true,
	showQuickLinks: true,
	pathBuilder: function(currentSpec, suites, browserCapabilities) {
    	//will return BrowserName/your-spec-name.png
    	return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
   }
});

exports.config = {
	directConnect: true,
	//seleniumAddress: 'http://localhost:4444/wd/hub',
	capabilities: {'browserName': 'firefox'},
	/* To execute on multiple browsers simultaneously uncomment following multiCapabilities: section
	multiCapabilities: [
	  {
	    browserName: 'firefox'
	  }, 
	  {
	    browserName: 'chrome'
	  }
	], */

	framework: 'jasmine',
	specs: ['SellUsedCars_spec.js'],
	allScriptsTimeout: 300000,
	getPageTimeout: 300000,
  	jasmineNodeOpts: {
    	defaultTimeoutInterval: 300000
	},
	// Setup the report before any tests start
   	beforeLaunch: function() {
      	return new Promise(function(resolve){
        	reporter.beforeLaunch(resolve);
      	});
   	},
   	// Close the report after all tests finish
   	afterLaunch: function(exitCode) {
      	return new Promise(function(resolve){
        	reporter.afterLaunch(resolve.bind(this, exitCode));
      	});
   	},
	onPrepare: function() {
    	var width = 1300;
    	var height = 1200;
    	browser.driver.manage().window().setSize(width,height);
    	jasmine.getEnv().addReporter(reporter);
      	afterAll(function(done) {
      		process.nextTick(done);
    	})
	}

};

