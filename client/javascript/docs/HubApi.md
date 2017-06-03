# RobusTestHub.HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceCommandPost**](HubApi.md#deviceCommandPost) | **POST** /device/command | run adb  command
[**deviceDelete**](HubApi.md#deviceDelete) | **DELETE** /device | free device
[**devicePut**](HubApi.md#devicePut) | **PUT** /device | get free device based on given parameters
[**deviceReverseDelete**](HubApi.md#deviceReverseDelete) | **DELETE** /device/reverse | unrevrse the device
[**deviceReversePut**](HubApi.md#deviceReversePut) | **PUT** /device/reverse | reverse a device
[**deviceShellPost**](HubApi.md#deviceShellPost) | **POST** /device/shell | run adb shell command
[**devices**](HubApi.md#devices) | **GET** /devices | list all attached devices to RobusTest


<a name="deviceCommandPost"></a>
# **deviceCommandPost**
> InlineResponse2001 deviceCommandPost(opts)

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
apiInstance.deviceCommandPost(opts, callback);
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

<a name="deviceDelete"></a>
# **deviceDelete**
> Device deviceDelete(opts)

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
apiInstance.deviceDelete(opts, callback);
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

<a name="devicePut"></a>
# **devicePut**
> Device devicePut(opts)

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
apiInstance.devicePut(opts, callback);
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

<a name="deviceReverseDelete"></a>
# **deviceReverseDelete**
> Device deviceReverseDelete(opts)

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
apiInstance.deviceReverseDelete(opts, callback);
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

<a name="deviceReversePut"></a>
# **deviceReversePut**
> Device deviceReversePut(opts)

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
apiInstance.deviceReversePut(opts, callback);
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

<a name="deviceShellPost"></a>
# **deviceShellPost**
> InlineResponse200 deviceShellPost(opts)

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
apiInstance.deviceShellPost(opts, callback);
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

<a name="devices"></a>
# **devices**
> HubDevices devices()

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
apiInstance.devices(callback);
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

