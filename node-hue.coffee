async = require "async"
request = require "request"

makeRequest = (requestOptions, fn) ->
  request requestOptions, (error, response, body) ->
    if error?
      fn error, null
    else
      try 
        responseJson = JSON.parse body
      catch error
        fn error, null
        return
      fn null, responseJson

exports.registerApp = (hueHostname, username, devicetype, fn) ->
  bodyJson = {
    "username": username,
    "devicetype": devicetype
  }
  requestOptions = {
    "method": "POST",
    "url": "http://#{hueHostname}/api",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.getDescription = (hueHostname, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/description.xml",
    "timeout": 30000
  }
  request requestOptions, (error, response, body) ->
    if error?
      fn error, null
    else
      fn null, responseJson

exports.getHubConfig = (hueHostname, key, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/config",
    "timeout": 30000
  }
  makeRequest requestOptions, fn

exports.getLights = (hueHostname, key, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/lights",
    "timeout": 30000
  }
  makeRequest requestOptions, fn  

exports.setGroup = (hueHostname, key, groupNumber, groupSetObject, fn) ->
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/groups/#{groupNumber}",
    "timeout": 30000,
    "body": JSON.stringify(groupSetObject)
  }
  makeRequest requestOptions, fn  

exports.getGroup = (hueHostname, key, groupNumber, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/groups/#{groupNumber}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn  

exports.getGroups = (hueHostname, key, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/groups",
    "timeout": 30000
  }
  makeRequest requestOptions, fn    

exports.getSchedules = (hueHostname, key, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/schedules",
    "timeout": 30000
  }
  makeRequest requestOptions, fn    

exports.getHubState = (hueHostname, key, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn

exports.getLightState = (hueHostname, key, lightNumber, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn

exports.updateHubConfig = (hueHostname, key, configOptions, fn) ->
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/config",
    "timeout": 30000,
    "body": JSON.stringify(configOptions)
  }
  makeRequest requestOptions, fn

exports.unregisterApp = (hueHostname, key, removeKey, fn) ->
  requestOptions = {
    "method": "DELETE",
    "url": "http://#{hueHostname}/api/#{key}/config/whitelist/#{removeKey}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn  

exports.getSchedule = (hueHostname, key, scheduleNumber, fn) ->
  requestOptions = {
    "method": "GET",
    "url": "http://#{hueHostname}/api/#{key}/schedules/#{scheduleNumber}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn

exports.deleteSchedule = (hueHostname, key, scheduleNumber, fn) ->
  requestOptions = {
    "method": "DELETE",
    "url": "http://#{hueHostname}/api/#{key}/schedules/#{scheduleNumber}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn  

exports.deleteGroup = (hueHostname, key, groupNumber, fn) ->
  requestOptions = {
    "method": "DELETE",
    "url": "http://#{hueHostname}/api/#{key}/groups/#{groupNumber}",
    "timeout": 30000
  }
  makeRequest requestOptions, fn

exports.createGroup = (hueHostname, key, name, lights, fn) ->
  bodyJson = {
    "name": name,
    "lights": lights
  }
  requestOptions = {
    "method": "POST",
    "url": "http://#{hueHostname}/api/#{key}/groups",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.createSchedule = (hueHostname, key, name, description, address, body, method, time, fn) ->
  bodyJson = {
    "name": name,
    "description": description,
    "command": {
      "address": address,
      "body": body,
      "method": method
    },
    "time": time
  }
  requestOptions = {
    "method": "POST",
    "url": "http://#{hueHostname}/api/#{key}/schedules",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.powerOffLight = (hueHostname, key, lightNumber, fn) ->
  bodyJson = {
    "on": false
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.powerOnLight = (hueHostname, key, lightNumber, fn) ->
  bodyJson = {
    "on": true
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.flashLightOnce = (hueHostname, key, lightNumber, fn) ->
  bodyJson = {
    "alert": "select"
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.flashLight = (hueHostname, key, lightNumber, fn) ->
  bodyJson = {
    "alert": "lselect"
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.setLightColorTemperature = (hueHostname, key, lightNumber, ct, fn) ->
  bodyJson = {
    "ct": ct
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.setLightBrightness = (hueHostname, key, lightNumber, brightness, fn) ->
  bodyJson = {
    "bri": brightness
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.setLightHue = (hueHostname, key, lightNumber, hue, fn) ->
  bodyJson = {
    "hue": hue
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.setLightRawObject = (hueHostname, key, lightNumber, rawObject, fn) ->
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(rawObject)
  }
  makeRequest requestOptions, fn

exports.setLightSaturation = (hueHostname, key, lightNumber, saturation, fn) ->
  bodyJson = {
    "sat": saturation
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.setLightXy = (hueHostname, key, lightNumber, xy, fn) ->
  bodyJson = {
    "xy": xy
  }
  requestOptions = {
    "method": "PUT",
    "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
    "timeout": 30000,
    "body": JSON.stringify(bodyJson)
  }
  makeRequest requestOptions, fn

exports.fadeLight = (hueHostname, key, lightNumber, start, end, step, timeIntervall, fn) ->
  current = start;     
  testFunction = () ->
    current is end
  iteratorFunction = (cb) ->
    bodyJson = {
      "hue": current
    }
    requestOptions = {
      "method": "PUT",
      "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
      "timeout": 30000,
      "body": JSON.stringify(bodyJson)
    }
    request requestOptions, (error, response, body) ->
      if error?
        cb error
      else
        if start < end
          current += step
          if current > end
            current = end
        else if start > end
          current -= step
          if current < end
            current = end;
        setTimeout cb, timeIntervall
  async.until testFunction, iteratorFunction, fn

exports.discoFadeLight = (hueHostname, key, lightNumber, startHue, startSat, startBri, whiteChance, fadeTimeIntervall, runTime, fn) ->
  startTime = (new Date()).getTime()
  currentHue = startHue 
  currentSat = startSat
  currentBri = startBri  
  timeTestFunction = () ->
    (new Date()).getTime() - startTime > runTime
  timeIteratorFunction = (cb) -> 
    endHue = Math.round Math.random() * 65535
    startHue = currentHue
    endBri = Math.round Math.random() * 255
    statBri = currentBri  
    if Math.round(Math.random() * whiteChance) is 0
      currentSat = 0         
    else
      currentSat = 255;
    testFunction = () ->
      (currentHue is endHue) and (currentBri is endBri)
    iteratorFunction = (cb2) ->
      bodyJson = {
        "hue": currentHue,
        "sat": currentSat,
        "bri": currentBri
      }
      requestOptions = {
        "method": "PUT",
        "url": "http://#{hueHostname}/api/#{key}/lights/#{lightNumber}/state",
        "timeout": 30000,
        "body": JSON.stringify(bodyJson)
      }
      request requestOptions, (error, response, body) ->
        if error?
          cb2 error
        else
          if startHue < endHue
            currentHue += 5000
            if currentHue > endHue
              currentHue = endHue
          else if startHue > endHue
            currentHue -= 5000
            if currentHue < endHue
              currentHue = endHue

          if startBri < endBri
            currentBri += 10
            if currentBri > endBri
              currentBri = endBri
          else if startBri > endBri
            currentBri -= 10
            if currentBri < endBri
              currentBri = endBri
          setTimeout cb2, fadeTimeIntervall
    async.until testFunction, iteratorFunction, cb
  async.until timeTestFunction, timeIteratorFunction, fn