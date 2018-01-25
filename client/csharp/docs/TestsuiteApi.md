# IO.Swagger.Api.TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TestSuitesForProject**](TestsuiteApi.md#testsuitesforproject) | **GET** /v3/testsuites | get all test suite for project
[**TestSuitesForProject_0**](TestsuiteApi.md#testsuitesforproject_0) | **GET** /v3/testsuite | get all test suite for project


<a name="testsuitesforproject"></a>
# **TestSuitesForProject**
> void TestSuitesForProject (string projectID)

get all test suite for project

return all test suite for given project

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TestSuitesForProjectExample
    {
        public void main()
        {
            var apiInstance = new TestsuiteApi();
            var projectID = projectID_example;  // string | project id

            try
            {
                // get all test suite for project
                apiInstance.TestSuitesForProject(projectID);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TestsuiteApi.TestSuitesForProject: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **projectID** | **string**| project id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="testsuitesforproject_0"></a>
# **TestSuitesForProject_0**
> Testsuite TestSuitesForProject_0 (string id)

get all test suite for project

return all test suite for given project

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class TestSuitesForProject_0Example
    {
        public void main()
        {
            var apiInstance = new TestsuiteApi();
            var id = id_example;  // string | test suite id

            try
            {
                // get all test suite for project
                Testsuite result = apiInstance.TestSuitesForProject_0(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TestsuiteApi.TestSuitesForProject_0: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **string**| test suite id | 

### Return type

[**Testsuite**](Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

