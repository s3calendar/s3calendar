var self = require("sdk/self");
var data = require("sdk/self").data;
var pageMod1 = require("sdk/page-mod");
var alertPage = require("sdk/page-mod");
var pref = require('sdk/simple-prefs');



pageMod1.PageMod({
  include: "*.ict.uniba.it",
  contentScriptFile: data.url("calendar.js"),
  contentScriptOptions: {
    img: data.url("calendar.png"),
	calendar: pref.prefs['calendarName']
  },
  onAttach: function(worker) {
    worker.port.emit('attached', true);
  }
});



function onPrefChange(prefName) {
	/*alertPage.PageMod({
	  include: "*",
	  contentScript: 'window.alert("Page matches ruleset");'
	});*/
  console.log("The " + prefName + " preference changed.");
};
pref.on("", onPrefChange);