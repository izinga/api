# Swagger\Client\DefaultApi

All URIs are relative to *http://robustest.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bug**](DefaultApi.md#bug) | **GET** /admin/v3/bug/trackerlist | get list for all supported bug trakers
[**jira**](DefaultApi.md#jira) | **GET** /admin/v3/bug/config/jira | get all jira config
[**jiraConfig**](DefaultApi.md#jiraConfig) | **POST** /admin/v3/bug/config/jira | create a jira config
[**jiraConfig_0**](DefaultApi.md#jiraConfig_0) | **PUT** /admin/v3/bug/config/jira/{jira_config_id} | update a jira config
[**jiraConfig_1**](DefaultApi.md#jiraConfig_1) | **PATCH** /admin/v3/bug/config/jira/{jira_config_id} | update all projects for a jira config
[**jiraIssue**](DefaultApi.md#jiraIssue) | **POST** /v3/bug/jira/{jira_project_id}/create | create a jira issue
[**jira_0**](DefaultApi.md#jira_0) | **GET** /admin/v3/bug/config/jira/projects | get all jira project
[**jira_1**](DefaultApi.md#jira_1) | **GET** /admin/v3/bug/config/jira/{congfig_id}/projects | get all jira project for given config
[**jira_2**](DefaultApi.md#jira_2) | **GET** /admin/v3/bug/config/jira/projects/{jira_project_id} | get a jira project  details
[**project**](DefaultApi.md#project) | **PUT** /v3/project/{project_id} | Update Project


# **bug**
> string[] bug()

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->bug();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->bug: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string[]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jira**
> \Swagger\Client\Model\JiraConfig[] jira()

get all jira config

get all jira config

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->jira();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jira: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\JiraConfig[]**](../Model/JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jiraConfig**
> string[] jiraConfig($body)

create a jira config

create a jira config

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\JiraConfigPayload(); // \Swagger\Client\Model\JiraConfigPayload | 

try {
    $result = $apiInstance->jiraConfig($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jiraConfig: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\JiraConfigPayload**](../Model/JiraConfigPayload.md)|  |

### Return type

**string[]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jiraConfig_0**
> \Swagger\Client\Model\JiraConfig jiraConfig_0($payload)

update a jira config

update a jira config

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$payload = new \Swagger\Client\Model\JiraConfigPayload(); // \Swagger\Client\Model\JiraConfigPayload | 

try {
    $result = $apiInstance->jiraConfig_0($payload);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jiraConfig_0: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**\Swagger\Client\Model\JiraConfigPayload**](../Model/JiraConfigPayload.md)|  |

### Return type

[**\Swagger\Client\Model\JiraConfig**](../Model/JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jiraConfig_1**
> string[] jiraConfig_1()

update all projects for a jira config

update all projects for a jira config

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->jiraConfig_1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jiraConfig_1: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string[]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jiraIssue**
> \Swagger\Client\Model\JiraIssueResponse jiraIssue($body)

create a jira issue

create a jira issue

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\JiraIssuePayload(); // \Swagger\Client\Model\JiraIssuePayload | 

try {
    $result = $apiInstance->jiraIssue($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jiraIssue: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\JiraIssuePayload**](../Model/JiraIssuePayload.md)|  |

### Return type

[**\Swagger\Client\Model\JiraIssueResponse**](../Model/JiraIssueResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jira_0**
> \Swagger\Client\Model\JiraProject[] jira_0()

get all jira project

get all jira project

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->jira_0();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jira_0: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\JiraProject[]**](../Model/JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jira_1**
> \Swagger\Client\Model\JiraProject[] jira_1()

get all jira project for given config

get all jira project for given config

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->jira_1();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jira_1: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\JiraProject[]**](../Model/JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **jira_2**
> \Swagger\Client\Model\JiraProject jira_2()

get a jira project  details

get a jira project details

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);

try {
    $result = $apiInstance->jira_2();
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->jira_2: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**\Swagger\Client\Model\JiraProject**](../Model/JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **project**
> \Swagger\Client\Model\Project project($body)

Update Project

Update Project from user interface

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\DefaultApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$body = new \Swagger\Client\Model\ProjectUpdatePayload(); // \Swagger\Client\Model\ProjectUpdatePayload | 

try {
    $result = $apiInstance->project($body);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->project: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**\Swagger\Client\Model\ProjectUpdatePayload**](../Model/ProjectUpdatePayload.md)|  |

### Return type

[**\Swagger\Client\Model\Project**](../Model/Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

