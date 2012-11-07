var util = require("util");
var hue = require("./node-hue");

hue.registerApp("172.30.20.7", "nodeAppWeNeedToFillThis", "nodeApp", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.getHubState("172.30.20.7", "nodeAppWeNeedToFillThis", function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.getLightState("172.30.20.7", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOffLight("172.30.20.7", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.powerOnLight("172.30.20.7", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLightOnce("172.30.20.7", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});

hue.flashLight("172.30.20.7", "nodeAppWeNeedToFillThis", 1, function(error, responseJson) {
    if(error !== null) {
        console.log(error);
    }
    else {
        console.log(util.inspect(responseJson, false, null, true));
    }
});