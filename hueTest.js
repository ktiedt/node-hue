var util = require("util");
var hue = require("./node-hue");

hue.registerApp("yourHueHostname", "YourAppName", "YourAppName", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

// To get your key for hue you first need to call "registerApp" with you data 

hue.getHubState("yourHueHostname", "yourHueKey", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.getLightState("yourHueHostname", "yourHueKey", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOffLight("yourHueHostname", "yourHueKey", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOnLight("yourHueHostname", "yourHueKey", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLightOnce("yourHueHostname", "yourHueKey", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLight("yourHueHostname", "yourHueKey", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.setLightColorTemperature("yourHueHostname", "yourHueKey", 1, 500, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.setLightBrightness("yourHueHostname", "yourHueKey", 1, 254, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.setLightHue("yourHueHostname", "yourHueKey", 1, 35000, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});


hue.setLightSaturation("yourHueHostname", "yourHueKey", 1, 254, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.setLightXy("yourHueHostname", "yourHueKey", 2, [0.4, 0.4], function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.fadeLight("yourHueHostname", "yourHueKey", 1, 65535, 0, 5000, 500, function(error) {
    if(error !== null && typeof error !== "undefined") {
        console.log(error);
    }
});

hue.discoFadeLight("yourHueHostname", "yourHueKey", 1, 5000, 100, 0, 2, 100, 300000, function(error) {
    if(error !== null && typeof error !== "undefined") {
        console.log(error);
    }
});

hue.setLightRawObject("yourHueHostname", "yourHueKey", 1, {"hue": 15331, "sat": 121, "alert": "lselect"}, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(responseJson);
    }
});