# carworkz-clickin
Test Deliverables

Document to Setup Protractor on Macbook/Windows machine and to execute Protractor scripts.

Installation Procedure: 

To set up protractor, we need to install below three things
1. Node.js
2. Protractor
3. Selenium Webdriver

Step 1: First we have to install NodeJS. Please click here to download node.js, "http://nodejs.org/download/"

Step 2:
Installing protractor can be done in two ways Locally and Globally
To install globally, please go ahead an type the command npm install -g protractor in command prompt.

The above command will install protractor and make it available globally.

Once that is done, confirm by typing 'protractor --version' in the commend prompt which will show you the protractor version that is installed.

Step 3:
To update the selenium webdriver, please type the command 'webdriver-manager update' in command prompt
It will download all webdriver latest version and default chrome driver.

Step 4:
Setup "protractor-jasmine2-screenshot-reporter” (Reporter for Protractor that will capture screenshots after each it() block and stores the results in a HTML format.). 
You just have to RUN "$ npm install protractor-jasmine2-screenshot-reporter --save-dev” in command prompt.

Reference: https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter

Now installation part is done successfully.

Execution Procedure:

Step1: First we need to start the selenium server by using below command
webdriver-manager start
or
webdriver-manager start --standalone
(webdriver-manager file is installed under Protractor ->bin)

Execute that command and we will see “Selenium server is up and running “ message at the end.

Step2: Open new command window and open the folder in which scripts (configuration script and specification scripts) are saved.

In my case I have kept all my scripts in protractor folder like (npm-global->lib->node_modules->Protractor-> ClickIn).
So command on my command prompt is like below,

cd /Users/rohitgathibandhe/npm-global/lib/node_modules/protractor/ClickIn

Step3: To execure the spec files we have to give “protractor conf.js” command as below, This will start the execution 

/Users/rohitgathibandhe/npm-global/lib/node_modules/protractor/bin/protractor conf.js

This command will open the browser window which is mentioned in the configuration file. And perform the steps as written in the Specification files.
In my ClickIn folder, conf.js is configuration file and SellUsedCars_spec.js are specification files, SellUsedCars_PO.js  are page object files and ClickIn.JSON is data file.

Once the execution is completed successfully without any unexpected error, test report in HTML format will get generated inside a folder “target” under ClickIn folder. “target “ folder will have screenshots and a report in .html file format.

Reference: https://www.seleniumeasy.com/protractor-angularjs-tutorials/protractor-example-program
https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter


Document to Setup Protractor on Ubuntu and to execute scripts.

Setting up Protractor on Ubuntu 14.04
1.	Installing Dependencies
Java JDK, NodeJS and NPM and are required dependencies for Protractor. The commands to install these are as follows:
a.	# Java 8 OpenJDK installation
$ sudo add-apt-repository ppa:openjdk-r/ppa 
$ sudo apt-get update 
$ sudo apt-get -f install 
$ sudo apt-get install openjdk-8-jdk
b.	# NodeJS installation
$ sudo add-apt-repository ppa:chris-lea/node.js 
$ sudo apt-get update 
$ sudo apt-get install nodejs
c.	# NPM installation
$ sudo apt-get install npm 
$ sudo npm install npm -g

2.	Protractor Setup
Use to install Protractor globally with:
sudo npm install -g protractor
This installs two command line tools - “protractor” and “webdriver-manager”. Run the following command to ensure that Protractor has installed correctly:
$ protractor --version
We will use the webdriver-manager tool on the command line to run the Selenium server. Before running it for the first time update it:
$ sudo webdriver-manager update
After the update is complete, start the Selenium server:
$ sudo webdriver-manager start
You can view the webserver in a web browser on the following local address:
http://localhost:4444/wd/hub
This needs to be running for any tests to be able to run.

3.	Install Jasmine-Spec-Reporter

Protractor is highly customisable to be able to use a wide range of reporters. In my example, I am using Jasmine-Spec-Reporter -
https://www.npmjs.com/package/jasmine-spec-reporter
We set up the reporter package as a local folder and, if using Git, you may want to add this to your .gitignore file to avoid pushing a whole bunch of junk to your branch.
From the terminal, navigate to your project folder and run the following commands: # The command npm init creates a package.json file which contains a list of required dependencies
$ npm init, # To add dependencies you need to install in order to run tests, we use the --save option during package installation
$ npm install jasmine-spec-reporter --save

4.	Adding a reporter to your conf.js file

Details of the reporter you are using has to be included in Protractors conf.js file. My example code is below detailing that I will be running tests using jasmine-spec-reporter

exports.config = { 
seleniumAddress: 'http://localhost:4444/wd/hub',
multiCapabilities: [{ 
'browserName': 'chrome' 
}, { 
'browserName': 'firefox' 
}],
specs: ['itheonTestSpec.js'],
onPrepare: function() { 
var SpecReporter = require('jasmine-spec-reporter'); 
// add jasmine spec reporter 
jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'})); 
},
framework: 'jasmine',
jasmineNodeOpts: { 
showColors: true, 
print: function() {} 
} 
};

Execution steps will be same as mentioned for Macbook and windows OS.

Reference: https://community.spiceworks.com/how_to/126249-setting-up-protractor-on-ubuntu-14-04
