sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/BindingMode",
	"sap/ui/model/resource/ResourceModel"
], function ( JSONModel, XMLView, BindingMode, ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		/* Aggregation Biding Using Templates  STEP 12  */

		var oProductModel = new JSONModel();
		oProductModel.loadData("./model/Products.json");
		sap.ui.getCore().setModel(oProductModel, "products");

		/*                      STEP 2
		Create a JSON model from an object literal//greetingText: " Hi, my name is Olavo Gomes"
		                        STEP 9
		Added the address
		                        STEP 10
		Added the salesAmount and currencyCode
		*/
		var oModel = new JSONModel({
            
			firstName: "Olavo",
			lastName: "Gomes",
			enabled: true,
			address: {
				street: "Dietmar-Hopp-Allee 16",
				city: "Walldorf",
				zip: "69190",
				country: "Germany"
			},
			salesAmount: 12345.6789,
			priceThreshold: 20,
			currencyCode: "EUR"
			
        });

		/*                      STEP 5
		* This sets de model to one-way biding. The only way aroud is to specificaly
		* using the oBindingInfo.mode parameter 
		oModel.setDefaultBindingMode(BindingMode.OneWay);*/


        /*                      STEP 2
		*Assign the model object to the SAPUI5 core. This way is accessable everywhere
		 It's not the best pratice but it works for this example*/
        sap.ui.getCore().setModel(oModel);
		
		/*
		* No Biding             STEP 1
		Create a text UI element that displays a hardcoded text string
		new Text({text: "Hi, my name is Harry Hawk  "}).placeAt("content");

		* One Way Biding        STEP 2
		Display a text element whose text is derived
		from the model object
		new Text({text: "{/greetingText}"}).placeAt("content");*/

		//                      STEP 6
		var oResourceModel = new ResourceModel({
			bundleName: "sap.ui.demo.db.i18n.i18n",
			supportedLocales: ["", "de"],
			fallbackLocale: ""
		});

		// German ResourceModel STEP 7 in i18n_de

		
		

		// Assign the model object to the SAPUI5 core using the name "i18n"

		sap.ui.getCore().setModel(oResourceModel, "i18n");

		
		/* Two way Biding       STEP 4*/
		var oView = new XMLView({
			viewName: "sap.ui.demo.db.view.App"
		});

		// Register the view with the message manager
		sap.ui.getCore().getMessageManager().registerObject(oView, true);

		oView.placeAt("content");
	});
});