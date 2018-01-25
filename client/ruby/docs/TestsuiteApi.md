# SwaggerClient::TestsuiteApi

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_suites_for_project**](TestsuiteApi.md#test_suites_for_project) | **GET** /v3/testsuites | get all test suite for project
[**test_suites_for_project_0**](TestsuiteApi.md#test_suites_for_project_0) | **GET** /v3/testsuite | get all test suite for project


# **test_suites_for_project**
> test_suites_for_project(project_id)

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
  api_instance.test_suites_for_project(project_id)
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TestsuiteApi->test_suites_for_project: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **String**| project id | 

### Return type

nil (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json



# **test_suites_for_project_0**
> Testsuite test_suites_for_project_0(id)

get all test suite for project

return all test suite for given project

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::TestsuiteApi.new

id = "id_example" # String | test suite id


begin
  #get all test suite for project
  result = api_instance.test_suites_for_project_0(id)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling TestsuiteApi->test_suites_for_project_0: #{e}"
end
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



