# HubApi

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
> InlineResponse2001 adbCommand(device)

run adb  command

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device5 device = new Device5(); // Device5 | 
try {
    InlineResponse2001 result = apiInstance.adbCommand(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#adbCommand");
    e.printStackTrace();
}
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
> InlineResponse200 deviceShell(device)

run adb shell command

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device4 device = new Device4(); // Device4 | 
try {
    InlineResponse200 result = apiInstance.deviceShell(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceShell");
    e.printStackTrace();
}
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
try {
    HubDevices result = apiInstance.devicesList();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#devicesList");
    e.printStackTrace();
}
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
> Device freeDevice(device)

free device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device1 device = new Device1(); // Device1 | 
try {
    Device result = apiInstance.freeDevice(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#freeDevice");
    e.printStackTrace();
}
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
> Device getFreeDevice(device)

get free device based on given parameters

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device device = new Device(); // Device | 
try {
    Device result = apiInstance.getFreeDevice(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#getFreeDevice");
    e.printStackTrace();
}
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
> Device reverseDevice(device)

reverse a device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device2 device = new Device2(); // Device2 | 
try {
    Device result = apiInstance.reverseDevice(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#reverseDevice");
    e.printStackTrace();
}
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
> Device unreverseDevice(device)

unrevrse the device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device3 device = new Device3(); // Device3 | 
try {
    Device result = apiInstance.unreverseDevice(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#unreverseDevice");
    e.printStackTrace();
}
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

