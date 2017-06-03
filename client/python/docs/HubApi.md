# swagger_client.HubApi

All URIs are relative to *http://mobile.robustest.com:8085*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adb_command**](HubApi.md#adb_command) | **POST** /device/command | run adb  command
[**device_shell**](HubApi.md#device_shell) | **POST** /device/shell | run adb shell command
[**devices_list**](HubApi.md#devices_list) | **GET** /devices | list all attached devices to RobusTest
[**free_device**](HubApi.md#free_device) | **DELETE** /device | free device
[**get_free_device**](HubApi.md#get_free_device) | **PUT** /device | get free device based on given parameters
[**reverse_device**](HubApi.md#reverse_device) | **PUT** /device/reverse | reverse a device
[**unreverse_device**](HubApi.md#unreverse_device) | **DELETE** /device/reverse | unrevrse the device


# **adb_command**
> InlineResponse2001 adb_command(device=device)

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
    api_response = api_instance.adb_command(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->adb_command: %s\n" % e)
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

# **device_shell**
> InlineResponse200 device_shell(device=device)

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
    api_response = api_instance.device_shell(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->device_shell: %s\n" % e)
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

# **devices_list**
> HubDevices devices_list()

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
    api_response = api_instance.devices_list()
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->devices_list: %s\n" % e)
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

# **free_device**
> Device free_device(device=device)

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
    api_response = api_instance.free_device(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->free_device: %s\n" % e)
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

# **get_free_device**
> Device get_free_device(device=device)

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
    api_response = api_instance.get_free_device(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->get_free_device: %s\n" % e)
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

# **reverse_device**
> Device reverse_device(device=device)

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
    api_response = api_instance.reverse_device(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->reverse_device: %s\n" % e)
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

# **unreverse_device**
> Device unreverse_device(device=device)

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
    api_response = api_instance.unreverse_device(device=device)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling HubApi->unreverse_device: %s\n" % e)
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

