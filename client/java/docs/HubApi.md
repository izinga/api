# HubApi

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
> InlineResponse2001 deviceCommandPost(device)

run adb  command

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device5 device = new Device5(); // Device5 | 
try {
    InlineResponse2001 result = apiInstance.deviceCommandPost(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceCommandPost");
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

<a name="deviceDelete"></a>
# **deviceDelete**
> Device deviceDelete(device)

free device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device1 device = new Device1(); // Device1 | 
try {
    Device result = apiInstance.deviceDelete(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceDelete");
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

<a name="devicePut"></a>
# **devicePut**
> Device devicePut(device)

get free device based on given parameters

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device device = new Device(); // Device | 
try {
    Device result = apiInstance.devicePut(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#devicePut");
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

<a name="deviceReverseDelete"></a>
# **deviceReverseDelete**
> Device deviceReverseDelete(device)

unrevrse the device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device3 device = new Device3(); // Device3 | 
try {
    Device result = apiInstance.deviceReverseDelete(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceReverseDelete");
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

<a name="deviceReversePut"></a>
# **deviceReversePut**
> Device deviceReversePut(device)

reverse a device

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device2 device = new Device2(); // Device2 | 
try {
    Device result = apiInstance.deviceReversePut(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceReversePut");
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

<a name="deviceShellPost"></a>
# **deviceShellPost**
> InlineResponse200 deviceShellPost(device)

run adb shell command

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
Device4 device = new Device4(); // Device4 | 
try {
    InlineResponse200 result = apiInstance.deviceShellPost(device);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#deviceShellPost");
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

<a name="devices"></a>
# **devices**
> HubDevices devices()

list all attached devices to RobusTest

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.HubApi;


HubApi apiInstance = new HubApi();
try {
    HubDevices result = apiInstance.devices();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling HubApi#devices");
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

