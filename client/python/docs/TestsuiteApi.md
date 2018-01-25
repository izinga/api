# swagger_client.TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_suites_for_project**](TestsuiteApi.md#test_suites_for_project) | **GET** /v3/testsuites | get all test suite for project


# **test_suites_for_project**
> Testsuite test_suites_for_project(project_id)

get all test suite for project

return all test suite for given project

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.TestsuiteApi()
project_id = 'project_id_example' # str | project id

try:
    # get all test suite for project
    api_response = api_instance.test_suites_for_project(project_id)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling TestsuiteApi->test_suites_for_project: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **str**| project id | 

### Return type

[**Testsuite**](Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

