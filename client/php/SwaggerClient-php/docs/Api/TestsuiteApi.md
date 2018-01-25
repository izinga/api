# Swagger\Client\TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testSuitesForProject**](TestsuiteApi.md#testSuitesForProject) | **GET** /v3/testsuites | get all test suite for project


# **testSuitesForProject**
> \Swagger\Client\Model\Testsuite testSuitesForProject($project_id)

get all test suite for project

return all test suite for given project

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\TestsuiteApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$project_id = "project_id_example"; // string | project id

try {
    $result = $apiInstance->testSuitesForProject($project_id);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling TestsuiteApi->testSuitesForProject: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **string**| project id |

### Return type

[**\Swagger\Client\Model\Testsuite**](../Model/Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

