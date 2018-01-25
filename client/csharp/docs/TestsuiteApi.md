# IO.Swagger.Api.TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**TestSuitesForProject**](TestsuiteApi.md#testsuitesforproject) | **GET** /v3/testsuites | get all test suite for project


<a name="testsuitesforproject"></a>
# **TestSuitesForProject**
> Testsuite TestSuitesForProject (string projectID)

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
                Testsuite result = apiInstance.TestSuitesForProject(projectID);
                Debug.WriteLine(result);
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

[**Testsuite**](Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

