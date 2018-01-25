# SwaggerClient::TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_suites_for_project**](TestsuiteApi.md#test_suites_for_project) | **GET** /v3/testsuites | get all test suite for project


# **test_suites_for_project**
> Testsuite test_suites_for_project(project_id)

get all test suite for project

return all test suite for given project

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TestsuiteApi.new

project_id = "project_id_example" # String | project id


begin
  #get all test suite for project
  result = api_instance.test_suites_for_project(project_id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TestsuiteApi->test_suites_for_project: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **String**| project id | 

### Return type

[**Testsuite**](Testsuite.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



