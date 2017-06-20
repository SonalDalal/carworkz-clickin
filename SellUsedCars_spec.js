//SellUsedCars_spec with SellUsedCars_PO and data file.

'use strict';

var SellUsedCarsPO = require('/Users/rohitgathibandhe/npm-global/lib/node_modules/protractor/ClickIn/SellUsedCars_PO.js'); //Load SellUsedCars_PO file
var testData = require('./ClickIn.json'); // Load test data file

describe('ClickIn - Post an ad for selling a Used Car', function() {

	var SellUsedCars;
	var EC = protractor.ExpectedConditions;

	SellUsedCars = new SellUsedCarsPO();
	
	testData.forEach( function (data) {
	
	//Test Case 1: Navigate to Post an Ad page for selling a Used Car
	it('Navigate to Post an Ad page for selling a Used Car', function() {
		browser.ignoreSynchronization = true;
		//Open test application in new browser
    	SellUsedCars.get(data.TestURL); 
    	//Verify the Browser title
   		browser.getTitle().then(function(text) {
   			expect(text).toBe("Free Classified Ads India | Free Ads Posting Classifieds India | ads India - Click.in");
		});
	});

	//Test Case 2: Verify that confirmation popup is displayed to set the City.
	it('Verify that confirmation popup is displayed to set the City', function() {
		//verify that the City selection default popup is displayed.
    	expect(SellUsedCars.SelectCityPopup.isDisplayed()).toBe(true);
    	//Verify the text on it.
    	SellUsedCars.SelectCityPopup.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.CitySelectionText);
    	});
    	//Click on OK button to confirm the city.
    	expect(SellUsedCars.OKButton.isDisplayed()).toBe(true);
    	SellUsedCars.OKButton.click();
    	//verify that the City selection default popup is closed.
    	expect(SellUsedCars.SelectCityPopup.isDisplayed()).toBe(false);
	});
	
	
	//Test Case 3: Navigate to Post an Ad screen for Used Cars by clicking on "Post your Ad" link
	it('Navigate to Post an Ad for Used Cars screen by clicking on "Post your Ad" link', function() {
		//verify that "Post your Ad" link is displayed on landing page and click on it.
    	expect(SellUsedCars.PostYourAdLink.isDisplayed()).toBe(true);
    	SellUsedCars.PostYourAdLink.click();
    	//Verify that Post an Ad overlay is displayed and user can select Automobiles module
    	expect(SellUsedCars.PostAnAdOverlay.isDisplayed()).toBe(true);
    	expect(SellUsedCars.AutomobilesModule.isDisplayed()).toBe(true);
    	SellUsedCars.AutomobilesModule.click();
    	//Verify that link to Sell Used Cars is displayed and click on that
    	expect(SellUsedCars.UsedCarsLink.isDisplayed()).toBe(true);
    	SellUsedCars.UsedCarsLink.click();
    	//Verify that Post an Ad page is displayed.
    	expect(SellUsedCars.PaAPageNavigationDisplay.isDisplayed()).toBe(true);
    	SellUsedCars.PaAPageNavigationDisplay.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.PaAPageNavigationDisplayText);
    	});
	});
	
	
	//Test Case 4: Verify various mandatory fields on Post an Ad screen 
	it('Verify various mandatory fields on Post an Ad screen', function() {
		//Click on Post button to verify mandatory fields and error messages.
		expect(SellUsedCars.PostButton.isDisplayed()).toBe(true);
		SellUsedCars.PostButton.click();
		//Close the Alert displayed that "Please fill all required fields
		browser.wait(EC.alertIsPresent(), 1000);
		browser.switchTo().alert().accept();
		//Scroll to top of page
		browser.executeScript("arguments[0].scrollIntoView();", SellUsedCars.PaAPageNavigationDisplay.getWebElement());
		//verify error messages for mandatory fields and verify that messages are displayed correctly
		//Verify error messages for Car Brand
		expect(SellUsedCars.SelectCarBrandErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectCarBrandErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectCarBrandErrMsgText);
    	});
    	//Verify error messages for Fuel Type
    	expect(SellUsedCars.SelectFuelTypeErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectFuelTypeErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectFuelTypeErrMsgText);
    	});
    	//Verify error messages for Manufactured Year
    	expect(SellUsedCars.SelectManufacturedYearErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectManufacturedYearErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectManufacturedYearErrMsgText);
    	});
    	//Verify error messages for Kms Done
    	expect(SellUsedCars.SelectKmsDoneErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectKmsDoneErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectKmsDoneErrMsgText);
    	});
    	//Verify error messages for Expected Price
    	expect(SellUsedCars.SelectExpectedPriceErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectExpectedPriceErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectExpectedPriceErrMsgText);
    	});
    	//Verify error messages for Insurance Included
    	expect(SellUsedCars.SelectInsuranceIncErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectInsuranceIncErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectInsuranceIncErrMsgText);
    	});
    	//Verify error messages for Classified Heading
    	expect(SellUsedCars.SelectClassifiedHeadErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectClassifiedHeadErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectClassifiedHeadErrMsgText);
    	});
    	//Verify error messages for Car Description
    	expect(SellUsedCars.SelectCarDescriptionErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectCarDescriptionErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectCarDescriptionErrMsgText);
    	});
    	//Verify error messages for Email Id
    	expect(SellUsedCars.SelectEmailIDErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectEmailIDErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectEmailIDErrMsgText);
    	});
    	//Verify error messages for You Are
    	expect(SellUsedCars.SelectYouAreErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectYouAreErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectYouAreErrMsgText);
    	});
    	//Verify error messages for Locality
    	expect(SellUsedCars.SelectLocalityErrMsg.isDisplayed()).toBe(true);
		SellUsedCars.SelectLocalityErrMsg.getText().then(function(text) {
    		expect(text).toBe(SellUsedCars.SelectLocalityErrMsgText);
    	});
 	
	});
	
	
	}); /* closing test data file*/

});