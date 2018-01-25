# SwaggerJsClient.TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**testSuitesForProject**](TestsuiteApi.md#testSuitesForProject) | **GET** /v3/testsuites | get all test suite for project
[**testSuitesForProject_0**](TestsuiteApi.md#testSuitesForProject_0) | **GET** /v3/testsuite | get all test suite for project


<a name="testSuitesForProject"></a>
# **testSuitesForProject**
> testSuitesForProject(projectID)

get all test suite for project

return all test suite for given project

### Example
```javascript
var SwaggerJsClient = require('swagger-js-client');

var apiInstance = new SwaggerJsClient.TestsuiteApi();

var projectID = "projectID_example"; // String | project id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.testSuitesForProject(projectID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **String**| project id | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="testSuitesForProject_0"></a>
# **testSuitesForProject_0**
> Testsuite testSuitesForProject_0(id)

get all test suite for project

return all test suite for given project

### Example
```javascript
var SwaggerJsClient = require('swagger-js-client');

var apiInstance = new SwaggerJsClient.TestsuiteApi();

var id = "id_example"; // String | test suite id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.testSuitesForProject_0(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| test suite id | 

### Return type

[**Testsuite**](Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

