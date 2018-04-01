# RobusTestApi.DefaultApi

All URIs are relative to *http://robustest.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bug**](DefaultApi.md#bug) | **GET** /admin/v3/bug/trackerlist | get list for all supported bug trakers
[**jira**](DefaultApi.md#jira) | **GET** /admin/v3/bug/config/jira | get all jira config
[**jiraConfig**](DefaultApi.md#jiraConfig) | **POST** /admin/v3/bug/config/jira | create a jira config
[**jiraConfig_0**](DefaultApi.md#jiraConfig_0) | **PUT** /admin/v3/bug/config/jira/{jira_config_id} | update a jira config
[**jiraConfig_1**](DefaultApi.md#jiraConfig_1) | **DELETE** /admin/v3/bug/config/jira/{jira_config_id} | delete jira config and all associated jira project
[**jiraConfig_2**](DefaultApi.md#jiraConfig_2) | **PATCH** /admin/v3/bug/config/jira/{jira_config_id} | update all projects for a jira config
[**jiraIssue**](DefaultApi.md#jiraIssue) | **POST** /v3/bug/jira/{jira_project_id}/create | create a jira issue
[**jira_0**](DefaultApi.md#jira_0) | **GET** /admin/v3/bug/config/jira/projects | get all jira project
[**jira_1**](DefaultApi.md#jira_1) | **GET** /admin/v3/bug/config/jira/config/{congfig_id}/projects | get all jira project for given config
[**jira_2**](DefaultApi.md#jira_2) | **GET** /admin/v3/bug/config/jira/projects/{jira_project_id} | get a jira project  details
[**project**](DefaultApi.md#project) | **PUT** /v3/project/{project_id} | Update Project


<a name="bug"></a>
# **bug**
> [&#39;String&#39;] bug()

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.bug(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jira"></a>
# **jira**
> [JiraConfig] jira()

get all jira config

get all jira config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jira(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[JiraConfig]**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jiraConfig"></a>
# **jiraConfig**
> [&#39;String&#39;] jiraConfig(body)

create a jira config

create a jira config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var body = new RobusTestApi.JiraConfigPayload(); // JiraConfigPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jiraConfig(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jiraConfig_0"></a>
# **jiraConfig_0**
> JiraConfig jiraConfig_0(payload)

update a jira config

update a jira config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var payload = new RobusTestApi.JiraConfigPayload(); // JiraConfigPayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jiraConfig_0(payload, callback);
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

<a name="jiraConfig_1"></a>
# **jiraConfig_1**
> &#39;String&#39; jiraConfig_1()

delete jira config and all associated jira project

update all projects for a jira config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jiraConfig_1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jiraConfig_2"></a>
# **jiraConfig_2**
> [&#39;String&#39;] jiraConfig_2()

update all projects for a jira config

update all projects for a jira config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jiraConfig_2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jiraIssue"></a>
# **jiraIssue**
> JiraIssueResponse jiraIssue(body)

create a jira issue

create a jira issue

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var body = new RobusTestApi.JiraIssuePayload(); // JiraIssuePayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jiraIssue(body, callback);
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

<a name="jira_0"></a>
# **jira_0**
> [JiraProject] jira_0()

get all jira project

get all jira project

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jira_0(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[JiraProject]**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jira_1"></a>
# **jira_1**
> [JiraProject] jira_1()

get all jira project for given config

get all jira project for given config

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jira_1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[JiraProject]**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jira_2"></a>
# **jira_2**
> JiraProject jira_2()

get a jira project  details

get a jira project details

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.jira_2(callback);
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

<a name="project"></a>
# **project**
> Project project(body)

Update Project

Update Project from user interface

### Example
```javascript
var RobusTestApi = require('robus_test_api');

var apiInstance = new RobusTestApi.DefaultApi();

var body = new RobusTestApi.ProjectUpdatePayload(); // ProjectUpdatePayload | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.project(body, callback);
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

