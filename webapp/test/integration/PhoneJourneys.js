jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"contactsapp/test/integration/NavigationJourneyPhone",
		"contactsapp/test/integration/NotFoundJourneyPhone",
		"contactsapp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});