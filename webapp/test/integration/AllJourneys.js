jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Employees in the list
// * All 3 Employees have at least one Employee1

sap.ui.require([
	"sap/ui/test/Opa5",
	"contactsapp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"contactsapp/test/integration/pages/App",
	"contactsapp/test/integration/pages/Browser",
	"contactsapp/test/integration/pages/Master",
	"contactsapp/test/integration/pages/Detail",
	"contactsapp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "contactsapp.view."
	});

	sap.ui.require([
		"contactsapp/test/integration/MasterJourney",
		"contactsapp/test/integration/NavigationJourney",
		"contactsapp/test/integration/NotFoundJourney",
		"contactsapp/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});