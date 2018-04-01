# IO.Swagger.Api.DefaultApi

All URIs are relative to *http://robustest.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Bug**](DefaultApi.md#bug) | **GET** /admin/v3/bug/trackerlist | get list for all supported bug trakers
[**Jira**](DefaultApi.md#jira) | **GET** /admin/v3/bug/config/jira | get all jira config
[**JiraConfig**](DefaultApi.md#jiraconfig) | **POST** /admin/v3/bug/config/jira | create a jira config
[**JiraConfig_0**](DefaultApi.md#jiraconfig_0) | **PUT** /admin/v3/bug/config/jira/{jira_config_id} | update a jira config
[**JiraConfig_1**](DefaultApi.md#jiraconfig_1) | **PATCH** /admin/v3/bug/config/jira/{jira_config_id} | update all projects for a jira config
[**JiraIssue**](DefaultApi.md#jiraissue) | **POST** /v3/bug/jira/{jira_project_id}/create | create a jira issue
[**Jira_0**](DefaultApi.md#jira_0) | **GET** /admin/v3/bug/config/jira/projects | get all jira project
[**Jira_1**](DefaultApi.md#jira_1) | **GET** /admin/v3/bug/config/jira/{congfig_id}/projects | get all jira project for given config
[**Jira_2**](DefaultApi.md#jira_2) | **GET** /admin/v3/bug/config/jira/projects/{jira_project_id} | get a jira project  details
[**Project**](DefaultApi.md#project) | **PUT** /v3/project/{project_id} | Update Project


<a name="bug"></a>
# **Bug**
> List<string> Bug ()

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class BugExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // get list for all supported bug trakers
                List&lt;string&gt; result = apiInstance.Bug();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Bug: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jira"></a>
# **Jira**
> List<JiraConfig> Jira ()

get all jira config

get all jira config

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JiraExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // get all jira config
                List&lt;JiraConfig&gt; result = apiInstance.Jira();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Jira: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<JiraConfig>**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jiraconfig"></a>
# **JiraConfig**
> List<string> JiraConfig (JiraConfigPayload body)

create a jira config

create a jira config

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JiraConfigExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new JiraConfigPayload(); // JiraConfigPayload | 

            try
            {
                // create a jira config
                List&lt;string&gt; result = apiInstance.JiraConfig(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.JiraConfig: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**List<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jiraconfig_0"></a>
# **JiraConfig_0**
> JiraConfig JiraConfig_0 (JiraConfigPayload payload)

update a jira config

update a jira config

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JiraConfig_0Example
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var payload = new JiraConfigPayload(); // JiraConfigPayload | 

            try
            {
                // update a jira config
                JiraConfig result = apiInstance.JiraConfig_0(payload);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.JiraConfig_0: " + e.Message );
            }
        }
    }
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

<a name="jiraconfig_1"></a>
# **JiraConfig_1**
> List<string> JiraConfig_1 ()

update all projects for a jira config

update all projects for a jira config

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JiraConfig_1Example
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // update all projects for a jira config
                List&lt;string&gt; result = apiInstance.JiraConfig_1();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.JiraConfig_1: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

**List<string>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jiraissue"></a>
# **JiraIssue**
> JiraIssueResponse JiraIssue (JiraIssuePayload body)

create a jira issue

create a jira issue

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class JiraIssueExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new JiraIssuePayload(); // JiraIssuePayload | 

            try
            {
                // create a jira issue
                JiraIssueResponse result = apiInstance.JiraIssue(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.JiraIssue: " + e.Message );
            }
        }
    }
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

<a name="jira_0"></a>
# **Jira_0**
> List<JiraProject> Jira_0 ()

get all jira project

get all jira project

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Jira_0Example
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // get all jira project
                List&lt;JiraProject&gt; result = apiInstance.Jira_0();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Jira_0: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<JiraProject>**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jira_1"></a>
# **Jira_1**
> List<JiraProject> Jira_1 ()

get all jira project for given config

get all jira project for given config

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Jira_1Example
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // get all jira project for given config
                List&lt;JiraProject&gt; result = apiInstance.Jira_1();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Jira_1: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<JiraProject>**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="jira_2"></a>
# **Jira_2**
> JiraProject Jira_2 ()

get a jira project  details

get a jira project details

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class Jira_2Example
    {
        public void main()
        {
            var apiInstance = new DefaultApi();

            try
            {
                // get a jira project  details
                JiraProject result = apiInstance.Jira_2();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Jira_2: " + e.Message );
            }
        }
    }
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

<a name="project"></a>
# **Project**
> Project Project (ProjectUpdatePayload body)

Update Project

Update Project from user interface

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class ProjectExample
    {
        public void main()
        {
            var apiInstance = new DefaultApi();
            var body = new ProjectUpdatePayload(); // ProjectUpdatePayload | 

            try
            {
                // Update Project
                Project result = apiInstance.Project(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.Project: " + e.Message );
            }
        }
    }
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

