# WWW::SwaggerClient::DefaultApi

## Load the API package
```perl
use WWW::SwaggerClient::Object::DefaultApi;
```

All URIs are relative to *http://robustest.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bug**](DefaultApi.md#bug) | **GET** /admin/v3/bug/trackerlist | get list for all supported bug trakers
[**jira**](DefaultApi.md#jira) | **GET** /admin/v3/bug/config/jira | get all jira config
[**jira_0**](DefaultApi.md#jira_0) | **GET** /admin/v3/bug/config/jira/projects | get all jira project
[**jira_1**](DefaultApi.md#jira_1) | **GET** /admin/v3/bug/config/jira/config/{congfig_id}/projects | get all jira project for given config
[**jira_2**](DefaultApi.md#jira_2) | **GET** /admin/v3/bug/config/jira/projects/{jira_project_id} | get a jira project  details
[**jira_config**](DefaultApi.md#jira_config) | **POST** /admin/v3/bug/config/jira | create a jira config
[**jira_config_0**](DefaultApi.md#jira_config_0) | **PUT** /admin/v3/bug/config/jira/{jira_config_id} | update a jira config
[**jira_config_1**](DefaultApi.md#jira_config_1) | **DELETE** /admin/v3/bug/config/jira/{jira_config_id} | delete jira config and all associated jira project
[**jira_config_2**](DefaultApi.md#jira_config_2) | **PATCH** /admin/v3/bug/config/jira/{jira_config_id} | update all projects for a jira config
[**jira_issue**](DefaultApi.md#jira_issue) | **POST** /v3/bug/jira/{jira_project_id}/create | create a jira issue
[**neuron**](DefaultApi.md#neuron) | **GET** /node_ip:8080/v2/status | get devices status, in progress, allready added
[**project**](DefaultApi.md#project) | **PUT** /v3/project/{project_id} | Update Project


# **bug**
> ARRAY[string] bug()

get list for all supported bug trakers

get list for all supported bug trakers

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->bug();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->bug: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[string]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira**
> ARRAY[JiraConfig] jira()

get all jira config

get all jira config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ARRAY[JiraConfig]**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_0**
> ARRAY[JiraProject] jira_0()

get all jira project

get all jira project

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira_0();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_0: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ARRAY[JiraProject]**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_1**
> ARRAY[JiraProject] jira_1()

get all jira project for given config

get all jira project for given config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira_1();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_1: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ARRAY[JiraProject]**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_2**
> JiraProject jira_2()

get a jira project  details

get a jira project details

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira_2();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_2: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**JiraProject**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config**
> ARRAY[string] jira_config(body => $body)

create a jira config

create a jira config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);

my $body = WWW::SwaggerClient::Object::JiraConfigPayload->new(); # JiraConfigPayload | 

eval { 
    my $result = $api_instance->jira_config(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_config: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**ARRAY[string]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config_0**
> JiraConfig jira_config_0(payload => $payload)

update a jira config

update a jira config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);

my $payload = WWW::SwaggerClient::Object::JiraConfigPayload->new(); # JiraConfigPayload | 

eval { 
    my $result = $api_instance->jira_config_0(payload => $payload);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_config_0: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payload** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

[**JiraConfig**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config_1**
> string jira_config_1()

delete jira config and all associated jira project

update all projects for a jira config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira_config_1();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_config_1: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config_2**
> ARRAY[string] jira_config_2()

update all projects for a jira config

update all projects for a jira config

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->jira_config_2();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_config_2: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**ARRAY[string]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_issue**
> JiraIssueResponse jira_issue(body => $body)

create a jira issue

create a jira issue

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);

my $body = WWW::SwaggerClient::Object::JiraIssuePayload->new(); # JiraIssuePayload | 

eval { 
    my $result = $api_instance->jira_issue(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->jira_issue: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraIssuePayload**](JiraIssuePayload.md)|  | 

### Return type

[**JiraIssueResponse**](JiraIssueResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **neuron**
> DeviceStatus neuron()

get devices status, in progress, allready added

get devices status, in progress, allready added

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);


eval { 
    my $result = $api_instance->neuron();
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->neuron: $@\n";
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**DeviceStatus**](DeviceStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **project**
> Project project(body => $body)

Update Project

Update Project from user interface

### Example 
```perl
use Data::Dumper;
use WWW::SwaggerClient::DefaultApi;
my $api_instance = WWW::SwaggerClient::DefaultApi->new(
);

my $body = WWW::SwaggerClient::Object::ProjectUpdatePayload->new(); # ProjectUpdatePayload | 

eval { 
    my $result = $api_instance->project(body => $body);
    print Dumper($result);
};
if ($@) {
    warn "Exception when calling DefaultApi->project: $@\n";
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ProjectUpdatePayload**](ProjectUpdatePayload.md)|  | 

### Return type

[**Project**](Project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

