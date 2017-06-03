# Swagger\Client\HubApi

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


# **deviceCommandPost**
> \Swagger\Client\Model\InlineResponse2001 deviceCommandPost($device)

run adb  command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device5(); // \Swagger\Client\Model\Device5 | 

try {
    $result = $api_instance->deviceCommandPost($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceCommandPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device5**](../Model/\Swagger\Client\Model\Device5.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse2001**](../Model/InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deviceDelete**
> \Swagger\Client\Model\Device deviceDelete($device)

free device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device1(); // \Swagger\Client\Model\Device1 | 

try {
    $result = $api_instance->deviceDelete($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device1**](../Model/\Swagger\Client\Model\Device1.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **devicePut**
> \Swagger\Client\Model\Device devicePut($device)

get free device based on given parameters

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device(); // \Swagger\Client\Model\Device | 

try {
    $result = $api_instance->devicePut($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->devicePut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device**](../Model/\Swagger\Client\Model\Device.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deviceReverseDelete**
> \Swagger\Client\Model\Device deviceReverseDelete($device)

unrevrse the device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device3(); // \Swagger\Client\Model\Device3 | 

try {
    $result = $api_instance->deviceReverseDelete($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceReverseDelete: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device3**](../Model/\Swagger\Client\Model\Device3.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deviceReversePut**
> \Swagger\Client\Model\Device deviceReversePut($device)

reverse a device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device2(); // \Swagger\Client\Model\Device2 | 

try {
    $result = $api_instance->deviceReversePut($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceReversePut: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device2**](../Model/\Swagger\Client\Model\Device2.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deviceShellPost**
> \Swagger\Client\Model\InlineResponse200 deviceShellPost($device)

run adb shell command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device4(); // \Swagger\Client\Model\Device4 | 

try {
    $result = $api_instance->deviceShellPost($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceShellPost: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device4**](../Model/\Swagger\Client\Model\Device4.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **devices**
> \Swagger\Client\Model\HubDevices devices()

list all attached devices to RobusTest

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();

try {
    $result = $api_instance->devices();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->devices: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\HubDevices**](../Model/HubDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

