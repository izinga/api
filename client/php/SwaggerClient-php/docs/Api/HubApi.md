# Swagger\Client\HubApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adbCommand**](HubApi.md#adbCommand) | **POST** /device/command | run adb  command
[**deviceShell**](HubApi.md#deviceShell) | **POST** /device/shell | run adb shell command
[**devicesList**](HubApi.md#devicesList) | **GET** /devices | list all attached devices to RobusTest
[**freeDevice**](HubApi.md#freeDevice) | **DELETE** /_id | free device
[**getFreeDevice**](HubApi.md#getFreeDevice) | **PUT** /_id | get free device based on given parameters
[**reverseDevice**](HubApi.md#reverseDevice) | **PUT** /device/reverse | reverse a device
[**unreverseDevice**](HubApi.md#unreverseDevice) | **DELETE** /device/reverse | unrevrse the device


# **adbCommand**
> \Swagger\Client\Model\InlineResponse2001 adbCommand($device)

run adb  command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device5(); // \Swagger\Client\Model\Device5 | 

try {
    $result = $api_instance->adbCommand($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->adbCommand: ', $e->getMessage(), PHP_EOL;
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

# **deviceShell**
> \Swagger\Client\Model\InlineResponse200 deviceShell($device)

run adb shell command

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device4(); // \Swagger\Client\Model\Device4 | 

try {
    $result = $api_instance->deviceShell($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->deviceShell: ', $e->getMessage(), PHP_EOL;
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

# **devicesList**
> \Swagger\Client\Model\HubDevices devicesList()

list all attached devices to RobusTest

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();

try {
    $result = $api_instance->devicesList();
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

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device1(); // \Swagger\Client\Model\Device1 | 

try {
    $result = $api_instance->freeDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->freeDevice: ', $e->getMessage(), PHP_EOL;
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

# **getFreeDevice**
> \Swagger\Client\Model\Device getFreeDevice($device)

get free device based on given parameters

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device(); // \Swagger\Client\Model\Device | 

try {
    $result = $api_instance->getFreeDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->getFreeDevice: ', $e->getMessage(), PHP_EOL;
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

# **reverseDevice**
> \Swagger\Client\Model\Device reverseDevice($device)

reverse a device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device2(); // \Swagger\Client\Model\Device2 | 

try {
    $result = $api_instance->reverseDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->reverseDevice: ', $e->getMessage(), PHP_EOL;
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

# **unreverseDevice**
> \Swagger\Client\Model\Device unreverseDevice($device)

unrevrse the device

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\HubApi();
$device = new \Swagger\Client\Model\Device3(); // \Swagger\Client\Model\Device3 | 

try {
    $result = $api_instance->unreverseDevice($device);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling HubApi->unreverseDevice: ', $e->getMessage(), PHP_EOL;
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

