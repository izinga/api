# RobusTestHub.HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adbCommand**](HubApi.md#adbCommand) | **POST** /device/command | run adb  command
[**deviceShell**](HubApi.md#deviceShell) | **POST** /device/shell | run adb shell command
[**devicesList**](HubApi.md#devicesList) | **GET** /devices | list all attached devices to RobusTest
[**freeDevice**](HubApi.md#freeDevice) | **DELETE** /device | free device
[**getFreeDevice**](HubApi.md#getFreeDevice) | **PUT** /device | get free device based on given parameters
[**reverseDevice**](HubApi.md#reverseDevice) | **PUT** /device/reverse | reverse a device
[**unreverseDevice**](HubApi.md#unreverseDevice) | **DELETE** /device/reverse | unrevrse the device


<a name="adbCommand"></a>
# **adbCommand**
> InlineResponse2001 adbCommand(opts)

run adb  command

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device5() // Device5 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.adbCommand(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device5**](Device5.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deviceShell"></a>
# **deviceShell**
> InlineResponse200 deviceShell(opts)

run adb shell command

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device4() // Device4 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deviceShell(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device4**](Device4.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="devicesList"></a>
# **devicesList**
> HubDevices devicesList()

list all attached devices to RobusTest

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.devicesList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HubDevices**](HubDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="freeDevice"></a>
# **freeDevice**
> Device freeDevice(opts)

free device

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device1() // Device1 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.freeDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device1**](Device1.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFreeDevice"></a>
# **getFreeDevice**
> Device getFreeDevice(opts)

get free device based on given parameters

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device() // Device | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFreeDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device**](Device.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reverseDevice"></a>
# **reverseDevice**
> Device reverseDevice(opts)

reverse a device

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device2() // Device2 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reverseDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device2**](Device2.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unreverseDevice"></a>
# **unreverseDevice**
> Device unreverseDevice(opts)

unrevrse the device

### Example
```javascript
var RobusTestHub = require('robus_test_hub');

var apiInstance = new RobusTestHub.HubApi();

var opts = { 
  'device': new RobusTestHub.Device3() // Device3 | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.unreverseDevice(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device3**](Device3.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

