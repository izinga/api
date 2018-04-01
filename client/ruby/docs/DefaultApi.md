# SwaggerClient::DefaultApi

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
[**project**](DefaultApi.md#project) | **PUT** /v3/project/{project_id} | Update Project


# **bug**
> Array&lt;String&gt; bug

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #get list for all supported bug trakers
  result = api_instance.bug
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->bug: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira**
> Array&lt;JiraConfig&gt; jira

get all jira config

get all jira config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #get all jira config
  result = api_instance.jira
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;JiraConfig&gt;**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_0**
> Array&lt;JiraProject&gt; jira_0

get all jira project

get all jira project

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #get all jira project
  result = api_instance.jira_0
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_0: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;JiraProject&gt;**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_1**
> Array&lt;JiraProject&gt; jira_1

get all jira project for given config

get all jira project for given config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #get all jira project for given config
  result = api_instance.jira_1
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_1: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;JiraProject&gt;**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_2**
> JiraProject jira_2

get a jira project  details

get a jira project details

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #get a jira project  details
  result = api_instance.jira_2
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_2: #{e}"
end
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



# **jira_config**
> Array&lt;String&gt; jira_config(body)

create a jira config

create a jira config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

body = SwaggerClient::JiraConfigPayload.new # JiraConfigPayload | 


begin
  #create a jira config
  result = api_instance.jira_config(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_config: #{e}"
end
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**Array&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_config_0**
> JiraConfig jira_config_0(payload)

update a jira config

update a jira config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

payload = SwaggerClient::JiraConfigPayload.new # JiraConfigPayload | 


begin
  #update a jira config
  result = api_instance.jira_config_0(payload)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_config_0: #{e}"
end
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



# **jira_config_1**
> String jira_config_1

delete jira config and all associated jira project

update all projects for a jira config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #delete jira config and all associated jira project
  result = api_instance.jira_config_1
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_config_1: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_config_2**
> Array&lt;String&gt; jira_config_2

update all projects for a jira config

update all projects for a jira config

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

begin
  #update all projects for a jira config
  result = api_instance.jira_config_2
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_config_2: #{e}"
end
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Array&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json



# **jira_issue**
> JiraIssueResponse jira_issue(body)

create a jira issue

create a jira issue

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

body = SwaggerClient::JiraIssuePayload.new # JiraIssuePayload | 


begin
  #create a jira issue
  result = api_instance.jira_issue(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->jira_issue: #{e}"
end
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



# **project**
> Project project(body)

Update Project

Update Project from user interface

### Example
```ruby
# load the gem
require 'swagger_client'

api_instance = SwaggerClient::DefaultApi.new

body = SwaggerClient::ProjectUpdatePayload.new # ProjectUpdatePayload | 


begin
  #Update Project
  result = api_instance.project(body)
  p result
rescue SwaggerClient::ApiError => e
  puts "Exception when calling DefaultApi->project: #{e}"
end
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



