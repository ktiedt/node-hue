var util = require("util");
var hue = require("./node-hue");

hue.registerApp("hue", "nodeAppWeNeedToFillThis", "nodeApp", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.getHupStatus("hue", "nodeAppWeNeedToFillThis", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.getLightStatus("hue", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOffLight("hue", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOnLight("hue", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLightOnce("hue", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLight("hue", "nodeAppWeNeedToFillThis", 2, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});