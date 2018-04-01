# DefaultApi

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
> List&lt;String&gt; bug()

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    List<String> result = apiInstance.bug();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#bug");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jira"></a>
# **jira**
> List&lt;JiraConfig&gt; jira()

get all jira config

get all jira config

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    List<JiraConfig> result = apiInstance.jira();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jira");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;JiraConfig&gt;**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jiraConfig"></a>
# **jiraConfig**
> List&lt;String&gt; jiraConfig(body)

create a jira config

create a jira config

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
JiraConfigPayload body = new JiraConfigPayload(); // JiraConfigPayload | 
try {
    List<String> result = apiInstance.jiraConfig(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jiraConfig");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  |

### Return type

**List&lt;String&gt;**

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
JiraConfigPayload payload = new JiraConfigPayload(); // JiraConfigPayload | 
try {
    JiraConfig result = apiInstance.jiraConfig_0(payload);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jiraConfig_0");
    e.printStackTrace();
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

<a name="jiraConfig_1"></a>
# **jiraConfig_1**
> String jiraConfig_1()

delete jira config and all associated jira project

update all projects for a jira config

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    String result = apiInstance.jiraConfig_1();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jiraConfig_1");
    e.printStackTrace();
}
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

<a name="jiraConfig_2"></a>
# **jiraConfig_2**
> List&lt;String&gt; jiraConfig_2()

update all projects for a jira config

update all projects for a jira config

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    List<String> result = apiInstance.jiraConfig_2();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jiraConfig_2");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List&lt;String&gt;**

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
JiraIssuePayload body = new JiraIssuePayload(); // JiraIssuePayload | 
try {
    JiraIssueResponse result = apiInstance.jiraIssue(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jiraIssue");
    e.printStackTrace();
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

<a name="jira_0"></a>
# **jira_0**
> List&lt;JiraProject&gt; jira_0()

get all jira project

get all jira project

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    List<JiraProject> result = apiInstance.jira_0();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jira_0");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;JiraProject&gt;**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="jira_1"></a>
# **jira_1**
> List&lt;JiraProject&gt; jira_1()

get all jira project for given config

get all jira project for given config

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    List<JiraProject> result = apiInstance.jira_1();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jira_1");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;JiraProject&gt;**](JiraProject.md)

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
try {
    JiraProject result = apiInstance.jira_2();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#jira_2");
    e.printStackTrace();
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

<a name="project"></a>
# **project**
> Project project(body)

Update Project

Update Project from user interface

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.DefaultApi;


DefaultApi apiInstance = new DefaultApi();
ProjectUpdatePayload body = new ProjectUpdatePayload(); // ProjectUpdatePayload | 
try {
    Project result = apiInstance.project(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling DefaultApi#project");
    e.printStackTrace();
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

