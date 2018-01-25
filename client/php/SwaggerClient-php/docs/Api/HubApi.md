# Swagger\Client\HubApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adbCommand**](HubApi.md#adbCommand) | **POST** /device/command | run adb  command
[**deviceShell**](HubApi.md#deviceShell) | **POST** /device/shell | run adb shell command
[**devicesList**](HubApi.md#devicesList) | **GET** /devices | list all attached devices to RobusTest
[**freeDevice**](HubApi.md#freeDevice) | **DELETE** /device | free device
[**getFreeDevice**](HubApi.md#getFreeDevice) | **PUT** /device | get free device based on given parameters
[**getScreenshot**](HubApi.md#getScreenshot) | **POST** /device/screenshot | get screenshot from device
[**unreserveDevice**](HubApi.md#unreserveDevice) | **DELETE** /device/screenshot | unrevrse the device


# **adbCommand**
> \Swagger\Client\Model\InlineResponse2001 adbCommand($device)

run adb  command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device5(); // \Swagger\Client\Model\Device5 | 

try {
    $result = $apiInstance->adbCommand($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->adbCommand: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device5**](../Model/Device5.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse2001**](../Model/InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deviceShell**
> \Swagger\Client\Model\InlineResponse200 deviceShell($device)

run adb shell command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device4(); // \Swagger\Client\Model\Device4 | 

try {
    $result = $apiInstance->deviceShell($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceShell: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device4**](../Model/Device4.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **devicesList**
> \Swagger\Client\Model\HubDevices devicesList()

list all attached devices to RobusTest

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->devicesList();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->devicesList: ', $e->getMessage(), PHP_EOL;
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

# **freeDevice**
> \Swagger\Client\Model\Device freeDevice($device)

free device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device1(); // \Swagger\Client\Model\Device1 | 

try {
    $result = $apiInstance->freeDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->freeDevice: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device1**](../Model/Device1.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFreeDevice**
> \Swagger\Client\Model\Device getFreeDevice($device)

get free device based on given parameters

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device(); // \Swagger\Client\Model\Device | 

try {
    $result = $apiInstance->getFreeDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->getFreeDevice: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device**](../Model/Device.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getScreenshot**
> \SplFileObject getScreenshot($device)

get screenshot from device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device2(); // \Swagger\Client\Model\Device2 | 

try {
    $result = $apiInstance->getScreenshot($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->getScreenshot: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device2**](../Model/Device2.md)|  | [optional]

### Return type

[**\SplFileObject**](../Model/\SplFileObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unreserveDevice**
> \Swagger\Client\Model\Device unreserveDevice($device)

unrevrse the device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\HubApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$device = new \Swagger\Client\Model\Device3(); // \Swagger\Client\Model\Device3 | 

try {
    $result = $apiInstance->unreserveDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->unreserveDevice: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**\Swagger\Client\Model\Device3**](../Model/Device3.md)|  | [optional]

### Return type

[**\Swagger\Client\Model\Device**](../Model/Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

