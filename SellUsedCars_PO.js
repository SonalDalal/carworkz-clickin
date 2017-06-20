//SellUsedCars Page object file - SellUsedCars_PO.js
'use strict';

var SellUsedCarsPO = function(){
	
	this.SelectCityPopup = element(by.id('clickin_city_div'));
	this.CitySelectionText = "Your city has been set to Mumbai" +"\nChange City" + "\nOK";
	this.OKButton = element(by.css('.clickin-city-popup-button'));
	this.PostYourAdLink = element(by.css('.clickin-postClassified-home'));
	this.PostAnAdOverlay = element(by.css('.home-select-popouter'));
	this.AutomobilesModule = element(by.xpath('//*[@id="post_popup_div"]/div[2]/div[3]/div/div/div/div[11]'));
	this.UsedCarsLink = element(by.xpath('//*[@id="select_cat_150"]/ul/li[1]/a'));
	this.PaAPageNavigationDisplay = element(by.xpath('//*[@id="container"]/div[2]'));
	this.PaAPageNavigationDisplayText = "Mumbai » Automobiles » Used Cars" + "\n(Change Category)"
	this.PostButton = element(by.xpath('//*[@id="btn_submit_1"]/input'));
	this.SelectCarBrandErrMsg = element(by.xpath('//*[@id="make-error"]'));
	this.SelectCarBrandErrMsgText = "Select Car Brand";
	this.SelectFuelTypeErrMsg = element(by.xpath('//*[@id="fld_23_1-error"]'));
	this.SelectFuelTypeErrMsgText = "Select Fuel type";
	this.SelectManufacturedYearErrMsg = element(by.xpath('//*[@id="fld_385_1-error"]'));
	this.SelectManufacturedYearErrMsgText = "Select Manufactured Year";
	this.SelectKmsDoneErrMsg = element(by.xpath('//*[@id="fld_22_1-error"]'));
	this.SelectKmsDoneErrMsgText = "Enter Kms Done";
	this.SelectExpectedPriceErrMsg = element(by.xpath('//*[@id="fld_5_1-error"]'));
	this.SelectExpectedPriceErrMsgText = "Enter Expected Price";
	this.SelectInsuranceIncErrMsg = element(by.xpath('//*[@id="402_1-error"]'));
	this.SelectInsuranceIncErrMsgText ="Select Insurance included";
	this.SelectClassifiedHeadErrMsg = element(by.xpath('//*[@id="fld_1_1-error"]'));
	this.SelectClassifiedHeadErrMsgText = "Enter Classified Heading";
	this.SelectCarDescriptionErrMsg = element(by.xpath('//*[@id="fld_3_1-error"]'));
	this.SelectCarDescriptionErrMsgText = "Enter Car Description";
	this.SelectEmailIDErrMsg = element(by.xpath('//*[@id="email_1-error"]'));
	this.SelectEmailIDErrMsgText = "Enter Email ID";
	this.SelectYouAreErrMsg = element(by.xpath('//*[@id="fld_405[]-error"]'));
	this.SelectYouAreErrMsgText = "Select Dealer / Individual";
	this.SelectLocalityErrMsg = element(by.xpath('//*[@id="fld_6_1-error"]'));
	this.SelectLocalityErrMsgText = "Select Locality";
	this.SelectCarModelErrMsg = element(by.xpath('//*[@id="150-error"]'));
	this.SelectCarModelErrMsgText = "Select Model";
	this.SelectCarVariantErrMsg = element(by.xpath('//*[@id="ver_191-error"]'));
	this.SelectCarVariantErrMsgText = "Select Variant";
	
	
	this.get = function(URL) {
		this.URL = URL;
		browser.get(this.URL);
	};

};

module.exports = SellUsedCarsPO;
