var async = require("async"),
	request = require("request"),
	makeRequest;


makeRequest = function(requestOptions, fn) {
  return request(requestOptions, function(error, response, body) {
    var responseJson;
    if (error != null) {
      return fn(error, null);
    } else {
      try {
        responseJson = JSON.parse(body);
      } catch (error) {
        fn(error, null);
        return;
      }
      return fn(null, responseJson);
    }
  });
};

exports.registerApp = function(hueHostname, username, devicetype, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "username": username,
    "devicetype": devicetype
  };
  requestOptions = {
    "method": "POST",
    "url": "http://" + hueHostname + "/api",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.getDescription = function(hueHostname, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/description.xml",
    "timeout": 30000
  };
  return request(requestOptions, function(error, response, body) {
    if (error != null) {
      return fn(error, null);
    } else {
      return fn(null, responseJson);
    }
  });
};

exports.getHubConfig = function(hueHostname, key, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/config",
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getLights = function(hueHostname, key, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/lights",
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.setGroup = function(hueHostname, key, groupNumber, groupSetObject, fn) {
  var requestOptions;
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/groups/" + groupNumber,
    "timeout": 30000,
    "body": JSON.stringify(groupSetObject)
  };
  return makeRequest(requestOptions, fn);
};

exports.getGroup = function(hueHostname, key, groupNumber, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/groups/" + groupNumber,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getGroups = function(hueHostname, key, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/groups",
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getSchedules = function(hueHostname, key, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/schedules",
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getHubState = function(hueHostname, key, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getLightState = function(hueHostname, key, lightNumber, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.updateHubConfig = function(hueHostname, key, configOptions, fn) {
  var requestOptions;
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/config",
    "timeout": 30000,
    "body": JSON.stringify(configOptions)
  };
  return makeRequest(requestOptions, fn);
};

exports.unregisterApp = function(hueHostname, key, removeKey, fn) {
  var requestOptions;
  requestOptions = {
    "method": "DELETE",
    "url": "http://" + hueHostname + "/api/" + key + "/config/whitelist/" + removeKey,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.getSchedule = function(hueHostname, key, scheduleNumber, fn) {
  var requestOptions;
  requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/schedules/" + scheduleNumber,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.deleteSchedule = function(hueHostname, key, scheduleNumber, fn) {
  var requestOptions;
  requestOptions = {
    "method": "DELETE",
    "url": "http://" + hueHostname + "/api/" + key + "/schedules/" + scheduleNumber,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.deleteGroup = function(hueHostname, key, groupNumber, fn) {
  var requestOptions;
  requestOptions = {
    "method": "DELETE",
    "url": "http://" + hueHostname + "/api/" + key + "/groups/" + groupNumber,
    "timeout": 30000
  };
  return makeRequest(requestOptions, fn);
};

exports.createGroup = function(hueHostname, key, name, lights, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "name": name,
    "lights": lights
  };
  requestOptions = {
    "method": "POST",
    "url": "http://" + hueHostname + "/api/" + key + "/groups",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.createSchedule = function(hueHostname, key, name, description, address, body, method, time, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "name": name,
    "description": description,
    "command": {
      "address": address,
      "body": body,
      "method": method
    },
    "time": time
  };
  requestOptions = {
    "method": "POST",
    "url": "http://" + hueHostname + "/api/" + key + "/schedules",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.powerOffLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "on": false
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.powerOnLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "on": true
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.flashLightOnce = function(hueHostname, key, lightNumber, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "alert": "select"
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.flashLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "alert": "lselect"
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightColorTemperature = function(hueHostname, key, lightNumber, ct, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "ct": ct
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightBrightness = function(hueHostname, key, lightNumber, brightness, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "bri": brightness
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightHue = function(hueHostname, key, lightNumber, hue, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "hue": hue
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightRawObject = function(hueHostname, key, lightNumber, rawObject, fn) {
  var requestOptions;
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(rawObject)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightSaturation = function(hueHostname, key, lightNumber, saturation, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "sat": saturation
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.setLightXy = function(hueHostname, key, lightNumber, xy, fn) {
  var bodyJson, requestOptions;
  bodyJson = {
    "xy": xy
  };
  requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  };
  return makeRequest(requestOptions, fn);
};

exports.fadeLight = function(hueHostname, key, lightNumber, start, end, step, timeIntervall, fn) {
  var current, iteratorFunction, testFunction;
  current = start;
  testFunction = function() {
    return current === end;
  };
  iteratorFunction = function(cb) {
    var bodyJson, requestOptions;
    bodyJson = {
      "hue": current
    };
    requestOptions = {
      "method": "PUT",
      "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
      "timeout": 30000,
      "body": JSON.stringify(bodyJson)
    };
    return request(requestOptions, function(error, response, body) {
      if (error != null) {
        return cb(error);
      } else {
        if (start < end) {
          current += step;
          if (current > end) {
            current = end;
          }
        } else if (start > end) {
          current -= step;
          if (current < end) {
            current = end;
          }
        }
        return setTimeout(cb, timeIntervall);
      }
    });
  };
  return async.until(testFunction, iteratorFunction, fn);
};

exports.discoFadeLight = function(hueHostname, key, lightNumber, startHue, startSat, startBri, whiteChance, fadeTimeIntervall, runTime, fn) {
  var currentBri, currentHue, currentSat, startTime, timeIteratorFunction, timeTestFunction;
  startTime = (new Date()).getTime();
  currentHue = startHue;
  currentSat = startSat;
  currentBri = startBri;
  timeTestFunction = function() {
    return (new Date()).getTime() - startTime > runTime;
  };
  timeIteratorFunction = function(cb) {
    var endBri, endHue, iteratorFunction, statBri, testFunction;
    endHue = Math.round(Math.random() * 65535);
    startHue = currentHue;
    endBri = Math.round(Math.random() * 255);
    statBri = currentBri;
    if (Math.round(Math.random() * whiteChance) === 0) {
      currentSat = 0;
    } else {
      currentSat = 255;
    }
    testFunction = function() {
      return (currentHue === endHue) && (currentBri === endBri);
    };
    iteratorFunction = function(cb2) {
      var bodyJson, requestOptions;
      bodyJson = {
        "hue": currentHue,
        "sat": currentSat,
        "bri": currentBri
      };
      requestOptions = {
        "method": "PUT",
        "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
        "timeout": 30000,
        "body": JSON.stringify(bodyJson)
      };
      return request(requestOptions, function(error, response, body) {
        if (error != null) {
          return cb2(error);
        } else {
          if (startHue < endHue) {
            currentHue += 5000;
            if (currentHue > endHue) {
              currentHue = endHue;
            }
          } else if (startHue > endHue) {
            currentHue -= 5000;
            if (currentHue < endHue) {
              currentHue = endHue;
            }
          }
          if (startBri < endBri) {
            currentBri += 10;
            if (currentBri > endBri) {
              currentBri = endBri;
            }
          } else if (startBri > endBri) {
            currentBri -= 10;
            if (currentBri < endBri) {
              currentBri = endBri;
            }
          }
          return setTimeout(cb2, fadeTimeIntervall);
        }
      });
    };
    return async.until(testFunction, iteratorFunction, cb);
  };
  return async.until(timeTestFunction, timeIteratorFunction, fn);
};
