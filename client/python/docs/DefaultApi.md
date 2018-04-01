# swagger_client.DefaultApi

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
> list[str] bug()

get list for all supported bug trakers

get list for all supported bug trakers

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # get list for all supported bug trakers
    api_response = api_instance.bug()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->bug: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira**
> list[JiraConfig] jira()

get all jira config

get all jira config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # get all jira config
    api_response = api_instance.jira()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[JiraConfig]**](JiraConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_0**
> list[JiraProject] jira_0()

get all jira project

get all jira project

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # get all jira project
    api_response = api_instance.jira_0()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_0: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[JiraProject]**](JiraProject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_1**
> list[JiraProject] jira_1()

get all jira project for given config

get all jira project for given config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # get all jira project for given config
    api_response = api_instance.jira_1()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_1: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**list[JiraProject]**](JiraProject.md)

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
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # get a jira project  details
    api_response = api_instance.jira_2()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_2: %s\n" % e)
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
> list[str] jira_config(body)

create a jira config

create a jira config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.JiraConfigPayload() # JiraConfigPayload | 

try:
    # create a jira config
    api_response = api_instance.jira_config(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_config: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**JiraConfigPayload**](JiraConfigPayload.md)|  | 

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config_0**
> JiraConfig jira_config_0(payload)

update a jira config

update a jira config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
payload = swagger_client.JiraConfigPayload() # JiraConfigPayload | 

try:
    # update a jira config
    api_response = api_instance.jira_config_0(payload)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_config_0: %s\n" % e)
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
> str jira_config_1()

delete jira config and all associated jira project

update all projects for a jira config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # delete jira config and all associated jira project
    api_response = api_instance.jira_config_1()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_config_1: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**str**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_config_2**
> list[str] jira_config_2()

update all projects for a jira config

update all projects for a jira config

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()

try:
    # update all projects for a jira config
    api_response = api_instance.jira_config_2()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_config_2: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

**list[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jira_issue**
> JiraIssueResponse jira_issue(body)

create a jira issue

create a jira issue

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.JiraIssuePayload() # JiraIssuePayload | 

try:
    # create a jira issue
    api_response = api_instance.jira_issue(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->jira_issue: %s\n" % e)
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

# **project**
> Project project(body)

Update Project

Update Project from user interface

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DefaultApi()
body = swagger_client.ProjectUpdatePayload() # ProjectUpdatePayload | 

try:
    # Update Project
    api_response = api_instance.project(body)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DefaultApi->project: %s\n" % e)
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

