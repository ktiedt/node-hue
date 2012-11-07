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
            fn(null, responseJson[0]);
        }
      });
    }
};

exports.getHupStatus = function(hueHostname, key, fn) {
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

exports.getLightStatus = function(hueHostname, key, lightNumber, fn) {
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
        fn(null, responseJson[0]);
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
        fn(null, responseJson[0]);
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
        fn(null, responseJson[0]);
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
        fn(null, responseJson[0]);
    }
  });
};