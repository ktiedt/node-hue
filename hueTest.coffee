util = require "util"
hue = require "./node-hue"

logResponse = (error, responseJson) ->
  if error?
    console.log error
  else
    console.log util.inspect responseJson, false, null, true

hue.getDescription "yourHueHostname", (error, responseXml) ->
  if error?
    console.log error
  else
    console.log responseXml

hue.registerApp "yourHueHostname", "YourAppName", "YourAppName", logResponse

# To get your key for hue you first need to call "registerApp" with you data 

hue.unregisterApp "yourHueHostname", "yourHueKey", "hueKeyToRemove", logResponse

hue.getHubState "yourHueHostname", "yourHueKey", logResponse

hue.createGroup "yourHueHostname", "yourHueKey", "test", ["1" ,"2"], logResponse

hue.getHubConfig "yourHueHostname", "yourHueKey", logResponse

hue.updateHubConfig "yourHueHostname", "yourHueKey", {"name": "test hue"}, logResponse

hue.getLights "yourHueHostname", "yourHueKey", logResponse

hue.getGroups "yourHueHostname", "yourHueKey", logResponse

hue.setGroup "yourHueHostname", "yourHueKey", 1, {"lights": ["1"]}, logResponse

hue.getGroup "yourHueHostname", "yourHueKey", 1, logResponse

hue.deleteGroup "yourHueHostname", "yourHueKey", 1, logResponse

hue.createSchedule "yourHueHostname", "yourHueKey", "schedule name", "schedule description", "api/yourHueKey/lights/1/state", {"on": false}, "PUT", "2012-11-09T12:28:30", logResponse

hue.getSchedules "yourHueHostname", "yourHueKey", logResponse

hue.getSchedule "yourHueHostname", "yourHueKey", 1, logResponse

hue.deleteSchedule "yourHueHostname", "yourHueKey", 1, logResponse

hue.getLightState "yourHueHostname", "yourHueKey", 1, logResponse

hue.powerOffLight "yourHueHostname", "yourHueKey", 1, logResponse

hue.powerOnLight "yourHueHostname", "yourHueKey", 1, logResponse

hue.flashLightOnce "yourHueHostname", "yourHueKey", 1, logResponse

hue.flashLight "yourHueHostname", "yourHueKey", 1, logResponse

hue.setLightColorTemperature "yourHueHostname", "yourHueKey", 1, 500, logResponse

hue.setLightBrightness "yourHueHostname", "yourHueKey", 1, 254, logResponse

hue.setLightHue "yourHueHostname", "yourHueKey", 1, 12000, logResponse

hue.setLightSaturation "yourHueHostname", "yourHueKey", 1, 254, logResponse

hue.setLightXy "yourHueHostname", "yourHueKey", 2, [0.4, 0.4], logResponse

hue.fadeLight "yourHueHostname", "yourHueKey", 1, 65535, 0, 5000, 500, (error) ->
  if error?
    console.log error

hue.discoFadeLight "yourHueHostname", "yourHueKey", 1, 5000, 100, 0, 2, 1, 3000000, (error) ->
  if error?
    console.log error

hue.setLightRawObject "yourHueHostname", "yourHueKey", 1, {"yourHueHostname": 15331, "sat": 121, "alert": "lselect"}, logResponse
