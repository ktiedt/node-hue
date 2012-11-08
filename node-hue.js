var async = require("async");
var request = require("request");

exports.registerApp = function(hueHostname, username, devicetype, fn) {
  if(username.length < 10) {
    fn(new Error("username needs at least ten characters"), null);
  }
  else {
      var bodyJson = {
        "username": username,
        "devicetype": devicetype
      }
      var requestOptions = {
        "method": "POST",
        "url": "http://" + hueHostname + "/api",
        "timeout": 30000,
        "body": JSON.stringify(bodyJson)
      }
      request(requestOptions, function(error, response, body) {
        if(error !== null) {
            fn(error, null);
        }
        else {
            try {
                var responseJson = JSON.parse(body);
            }
            catch(error) {
                fn(error, null);
                return
            }
            fn(null, responseJson);
        }
      });
    }
};

exports.getHubState = function(hueHostname, key, fn) {
  var requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key,
    "timeout": 30000
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.getLightState = function(hueHostname, key, lightNumber, fn) {
  var requestOptions = {
    "method": "GET",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber,
    "timeout": 30000
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.powerOffLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson = {
    "on": false
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.powerOnLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson = {
    "on": true
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.flashLightOnce = function(hueHostname, key, lightNumber, fn) {
  var bodyJson = {
    "alert": "select"
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.flashLight = function(hueHostname, key, lightNumber, fn) {
  var bodyJson = {
    "alert": "lselect"
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightColorTemperature = function(hueHostname, key, lightNumber, ct, fn) {
  var bodyJson = {
    "ct": ct
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightBrightness = function(hueHostname, key, lightNumber, brightness, fn) {
  var bodyJson = {
    "bri": brightness
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightHue = function(hueHostname, key, lightNumber, hue, fn) {
  var bodyJson = {
    "hue": hue
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightRawObject = function(hueHostname, key, lightNumber, rawObject, fn) {
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(rawObject)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightSaturation = function(hueHostname, key, lightNumber, saturation, fn) {
  var bodyJson = {
    "sat": saturation
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.setLightXy = function(hueHostname, key, lightNumber, xy, fn) {
  var bodyJson = {
    "xy": xy
  }
  var requestOptions = {
    "method": "PUT",
    "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  request(requestOptions, function(error, response, body) {
    if(error !== null) {
        fn(error, null);
    }
    else {
        try {
            var responseJson = JSON.parse(body);
        }
        catch(error) {
            fn(error, null);
            return
        }
        fn(null, responseJson);
    }
  });
};

exports.fadeLight = function(hueHostname, key, lightNumber, start, end, step, timeIntervall, fn) {
  var current = start;     
  var testFunction = function() {
    return current === end;
  };
  var iteratorFunction = function(cb) {
    var bodyJson = {
      "hue": current
    }
    var requestOptions = {
      "method": "PUT",
      "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
      "timeout": 30000,
      "body": JSON.stringify(bodyJson)
    }
    request(requestOptions, function(error, response, body) {   
      if(error !== null) {
          cb(error);
      }
      else {
        if(start < end) {
          current += step;
          if(current > end) {
            current = end;
          }
        }
        else if(start > end) {
          current -= step;
          if(current < end) {
            current = end;
          }          
        }
        setTimeout(cb, timeIntervall);
      }
    });    
  };

  async.until(testFunction, iteratorFunction, fn);
};

exports.discoFadeLight = function(hueHostname, key, lightNumber, startHue, startSat, startBri, whiteChance, fadeTimeIntervall, runTime, fn) {  
  var startTime = (new Date()).getTime();
  var currentHue = startHue; 
  var currentSat = startSat;
  var currentBri = startBri;   
  var timeTestFunction = function() {
    return (new Date()).getTime() - startTime > runTime
  };
  var timeIteratorFunction = function(cb) {  
    var endHue = Math.round(Math.random() * 65535);
    var startHue = currentHue;
    var endBri = Math.round(Math.random() * 255);
    var statBri = currentBri;    
    if(Math.round(Math.random() * whiteChance) === 0) {
      currentSat = 0;
    }                
    else {
      currentSat = 255;
    }     
    var testFunction = function() {
      return (currentHue === endHue) && (currentBri === endBri);
    };
    var iteratorFunction = function(cb2) {
      var bodyJson = {
        "hue": currentHue,
        "sat": currentSat,
        "bri": currentBri
      }
      var requestOptions = {
        "method": "PUT",
        "url": "http://" + hueHostname + "/api/" + key + "/lights/" + lightNumber + "/state",
        "timeout": 30000,
        "body": JSON.stringify(bodyJson)
      }
      request(requestOptions, function(error, response, body) { 
        if(error !== null) {
            cb2(error);
        }
        else {
          if(startHue < endHue) {
            currentHue += 5000;
            if(currentHue > endHue) {
              currentHue = endHue;
            }
          }
          else if(startHue > endHue) {
            currentHue -= 5000;
            if(currentHue < endHue) {
              currentHue = endHue;
            }          
          }

          if(startBri < endBri) {
            currentBri += 10;
            if(currentBri > endBri) {
              currentBri = endBri;
            }
          }
          else if(startBri > endBri) {
            currentBri -= 10;
            if(currentBri < endBri) {
              currentBri = endBri;
            }          
          }
          setTimeout(cb2, fadeTimeIntervall);
        }
      });    
    };

    async.until(testFunction, iteratorFunction, cb); 
  };

  async.until(timeTestFunction, timeIteratorFunction, fn);
};