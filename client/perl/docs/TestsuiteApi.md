# WWW::SwaggerClient::TestsuiteApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::TestsuiteApi;
```

All URIs are relative to *https://virtserver.swaggerhub.com/Izinga/Hub/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**test_suites_for_project**](TestsuiteApi.md#test_suites_for_project) | **GET** /v3/testsuites | get all test suite for project
[**test_suites_for_project_0**](TestsuiteApi.md#test_suites_for_project_0) | **GET** /v3/testsuite | get all test suite for project


# **test_suites_for_project**
> test_suites_for_project(project_id => $project_id)

get all test suite for project

return all test suite for given project

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::TestsuiteApi;
my $api_instance = WWW::SwaggerClient::TestsuiteApi->new(
);

my $project_id = 'project_id_example'; # string | project id

eval { 
    $api_instance->test_suites_for_project(project_id => $project_id);
};
if ($@) {
    warn "Exception when calling TestsuiteApi->test_suites_for_project: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_id** | **string**| project id | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_suites_for_project_0**
> Testsuite test_suites_for_project_0(id => $id)

get all test suite for project

return all test suite for given project

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::TestsuiteApi;
my $api_instance = WWW::SwaggerClient::TestsuiteApi->new(
);

my $id = 'id_example'; # string | test suite id

eval { 
    my $result = $api_instance->test_suites_for_project_0(id => $id);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling TestsuiteApi->test_suites_for_project_0: $@\n";
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

