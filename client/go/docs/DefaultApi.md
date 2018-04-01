# \DefaultApi

All URIs are relative to *http://robustest.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Bug**](DefaultApi.md#Bug) | **Get** /admin/v3/bug/trackerlist | get list for all supported bug trakers
[**Jira**](DefaultApi.md#Jira) | **Get** /admin/v3/bug/config/jira | get all jira config
[**JiraConfig**](DefaultApi.md#JiraConfig) | **Post** /admin/v3/bug/config/jira | create a jira config
[**JiraConfig_0**](DefaultApi.md#JiraConfig_0) | **Put** /admin/v3/bug/config/jira/{jira_config_id} | update a jira config
[**JiraConfig_1**](DefaultApi.md#JiraConfig_1) | **Patch** /admin/v3/bug/config/jira/{jira_config_id} | update all projects for a jira config
[**JiraIssue**](DefaultApi.md#JiraIssue) | **Post** /v3/bug/jira/{jira_project_id}/create | create a jira issue
[**Jira_0**](DefaultApi.md#Jira_0) | **Get** /admin/v3/bug/config/jira/projects | get all jira project
[**Jira_1**](DefaultApi.md#Jira_1) | **Get** /admin/v3/bug/config/jira/{congfig_id}/projects | get all jira project for given config
[**Jira_2**](DefaultApi.md#Jira_2) | **Get** /admin/v3/bug/config/jira/projects/{jira_project_id} | get a jira project  details
[**Project**](DefaultApi.md#Project) | **Put** /v3/project/{project_id} | Update Project


# **Bug**
> []string Bug(ctx, )
get list for all supported bug trakers

get list for all supported bug trakers

### Required Parameters
This endpoint does not need any parameter.

### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Jira**
> []JiraConfig Jira(ctx, )
get all jira config

get all jira config

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]JiraConfig**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **JiraConfig**
> []string JiraConfig(ctx, body)
create a jira config

create a jira config

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **JiraConfig_0**
> JiraConfig JiraConfig_0(ctx, payload)
update a jira config

update a jira config

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **payload** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

[**JiraConfig**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **JiraConfig_1**
> []string JiraConfig_1(ctx, )
update all projects for a jira config

update all projects for a jira config

### Required Parameters
This endpoint does not need any parameter.

### Return type

**[]string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **JiraIssue**
> JiraIssueResponse JiraIssue(ctx, body)
create a jira issue

create a jira issue

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**JiraIssuePayload**](JiraIssuePayload.md)|  | 

### Return type

[**JiraIssueResponse**](jiraIssueResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Jira_0**
> []JiraProject Jira_0(ctx, )
get all jira project

get all jira project

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]JiraProject**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Jira_1**
> []JiraProject Jira_1(ctx, )
get all jira project for given config

get all jira project for given config

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**[]JiraProject**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Jira_2**
> JiraProject Jira_2(ctx, )
get a jira project  details

get a jira project details

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**JiraProject**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Project**
> Project Project(ctx, body)
Update Project

Update Project from user interface

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for logging, tracing, authentication, etc.
  **body** | [**ProjectUpdatePayload**](ProjectUpdatePayload.md)|  | 

### Return type

[**Project**](project.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

