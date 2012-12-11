var hue,
	logResponse,
	util,
	hueHost = "xxx.xxx.xxx.xxx", 	// IP of Hue's hub
	hueKey = "", 					// Hash returned by the registerApp call -- required to press center button on hub before it will accept the call
	hueApp = "testApp"; 			// name of your app that is associated with the hueKey


util = require("util");

hue = require("./node-hue");

logResponse = function(error, responseJson) {
  if (error != null) {
    return console.log(error);
  } else {
    return console.log(util.inspect(responseJson, false, null, true));
  }
};

hue.getDescription(hueHost, function(error, responseXml) {
  if (error != null) {
    return console.log(error);
  } else {
    return console.log(responseXml);
  }
});

hue.registerApp(hueHost, hueApp, hueApp, logResponse);

hue.unregisterApp(hueHost, hueKey, "hueKeyToRemove", logResponse);

hue.getHubState(hueHost, hueKey, logResponse);

hue.createGroup(hueHost, hueKey, "test", ["1", "2"], logResponse);

hue.getHubConfig(hueHost, hueKey, logResponse);

hue.updateHubConfig(hueHost, hueKey, {
  "name": "test hue"
}, logResponse);

hue.getLights(hueHost, hueKey, logResponse);

hue.getGroups(hueHost, hueKey, logResponse);

hue.setGroup(hueHost, hueKey, 1, {
  "lights": ["1"]
}, logResponse);

hue.getGroup(hueHost, hueKey, 1, logResponse);

hue.deleteGroup(hueHost, hueKey, 1, logResponse);

hue.createSchedule(hueHost, hueKey, "schedule name", "schedule description", "api/yourHueKey/lights/1/state", {
  "on": false
}, "PUT", "2012-11-09T12:28:30", logResponse);

hue.getSchedules(hueHost, hueKey, logResponse);

hue.getSchedule(hueHost, hueKey, 1, logResponse);

hue.deleteSchedule(hueHost, hueKey, 1, logResponse);

hue.getLightState(hueHost, hueKey, 1, logResponse);

hue.powerOffLight(hueHost, hueKey, 1, logResponse);

hue.powerOnLight(hueHost, hueKey, 1, logResponse);

hue.flashLightOnce(hueHost, hueKey, 1, logResponse);

hue.flashLight(hueHost, hueKey, 1, logResponse);

hue.setLightColorTemperature(hueHost, hueKey, 1, 500, logResponse);

hue.setLightBrightness(hueHost, hueKey, 1, 254, logResponse);

hue.setLightHue(hueHost, hueKey, 1, 12000, logResponse);

hue.setLightSaturation(hueHost, hueKey, 1, 254, logResponse);

hue.setLightXy(hueHost, hueKey, 2, [0.4, 0.4], logResponse);

hue.fadeLight(hueHost, hueKey, 1, 65535, 0, 5000, 500, function(error) {
  if (error != null) {
    return console.log(error);
  }
});

hue.discoFadeLight(hueHost, hueKey, 1, 5000, 100, 0, 2, 1, 3000000, function(error) {
  if (error != null) {
    return console.log(error);
  }
});

hue.setLightRawObject(hueHost, hueKey, 1, {
  hueHost: 15331,
  "sat": 121,
  "alert": "lselect"
}, logResponse);
