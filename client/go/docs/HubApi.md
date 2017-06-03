# \HubApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AdbCommand**](HubApi.md#AdbCommand) | **Post** /device/command | run adb  command
[**DeviceShell**](HubApi.md#DeviceShell) | **Post** /device/shell | run adb shell command
[**DevicesList**](HubApi.md#DevicesList) | **Get** /devices | list all attached devices to RobusTest
[**FreeDevice**](HubApi.md#FreeDevice) | **Delete** /_id | free device
[**GetFreeDevice**](HubApi.md#GetFreeDevice) | **Put** /_id | get free device based on given parameters
[**ReverseDevice**](HubApi.md#ReverseDevice) | **Put** /device/reverse | reverse a device
[**UnreverseDevice**](HubApi.md#UnreverseDevice) | **Delete** /device/reverse | unrevrse the device


# **AdbCommand**
> InlineResponse2001 AdbCommand($device)

run adb  command


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device5**](Device5.md)|  | [optional] 

### Return type

[**InlineResponse2001**](inline_response_200_1.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DeviceShell**
> InlineResponse200 DeviceShell($device)

run adb shell command


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device4**](Device4.md)|  | [optional] 

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DevicesList**
> HubDevices DevicesList()

list all attached devices to RobusTest


### Parameters
This endpoint does not need any parameter.

### Return type

[**HubDevices**](HubDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **FreeDevice**
> Device FreeDevice($device)

free device


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetFreeDevice**
> Device GetFreeDevice($device)

get free device based on given parameters


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ReverseDevice**
> Device ReverseDevice($device)

reverse a device


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **UnreverseDevice**
> Device UnreverseDevice($device)

unrevrse the device


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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

