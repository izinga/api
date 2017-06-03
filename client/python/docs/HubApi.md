# swagger_client.HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**device_command_post**](HubApi.md#device_command_post) | **POST** /device/command | run adb  command
[**device_delete**](HubApi.md#device_delete) | **DELETE** /device | free device
[**device_put**](HubApi.md#device_put) | **PUT** /device | get free device based on given parameters
[**device_reverse_delete**](HubApi.md#device_reverse_delete) | **DELETE** /device/reverse | unrevrse the device
[**device_reverse_put**](HubApi.md#device_reverse_put) | **PUT** /device/reverse | reverse a device
[**device_shell_post**](HubApi.md#device_shell_post) | **POST** /device/shell | run adb shell command
[**devices**](HubApi.md#devices) | **GET** /devices | list all attached devices to RobusTest


# **device_command_post**
> InlineResponse2001 device_command_post(device=device)

run adb  command

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device5() # Device5 |  (optional)

try: 
    # run adb  command
    api_response = api_instance.device_command_post(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_command_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device5**](Device5.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_delete**
> Device device_delete(device=device)

free device

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device1() # Device1 |  (optional)

try: 
    # free device
    api_response = api_instance.device_delete(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device1**](Device1.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_put**
> Device device_put(device=device)

get free device based on given parameters

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device() # Device |  (optional)

try: 
    # get free device based on given parameters
    api_response = api_instance.device_put(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device**](Device.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_reverse_delete**
> Device device_reverse_delete(device=device)

unrevrse the device

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device3() # Device3 |  (optional)

try: 
    # unrevrse the device
    api_response = api_instance.device_reverse_delete(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_reverse_delete: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device3**](Device3.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_reverse_put**
> Device device_reverse_put(device=device)

reverse a device

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device2() # Device2 |  (optional)

try: 
    # reverse a device
    api_response = api_instance.device_reverse_put(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_reverse_put: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device2**](Device2.md)|  | [optional] 

### Return type

[**Device**](Device.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **device_shell_post**
> InlineResponse200 device_shell_post(device=device)

run adb shell command

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()
device = swagger_client.Device4() # Device4 |  (optional)

try: 
    # run adb shell command
    api_response = api_instance.device_shell_post(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_shell_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device** | [**Device4**](Device4.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices**
> HubDevices devices()

list all attached devices to RobusTest

### Example 
```python
from __future__ import print_statement
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.HubApi()

try: 
    # list all attached devices to RobusTest
    api_response = api_instance.devices()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->devices: %s\n" % e)
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**HubDevices**](HubDevices.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

